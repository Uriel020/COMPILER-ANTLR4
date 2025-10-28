//In Development because llvm-node is falling in bun.js

import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import type { RedLangVisitor } from "../generated/RedLangVisitor";
import type * as RedLangParser from "../generated/RedLangParser";

interface FunctionDef {
  params: string[];
  block: RedLangParser.BlockContext;
  returnType: string;
}

interface Variable {
  reg: string;
  type: string;
  isGlobal: boolean;
}

type IRValue = { reg: string; type: string };

export default class LLVMVisitor extends AbstractParseTreeVisitor<IRValue | null> implements RedLangVisitor<IRValue | null> {
  private ir: string = "";
  private indent: number = 0;
  private regCounter: number = 0;
  private labelCounter: number = 0;

  private variables: Map<string, Variable> = new Map();
  private globalVariables: Map<string, Variable> = new Map();
  private functions: Record<string, FunctionDef> = {};
  private hasReturned: boolean = false;

  constructor(moduleName = "red_module") {
    super();
    this.ir = `; ModuleID = '${moduleName}'\n`;
    this.ir += `target datalayout = "e-m:o-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128"\n`;
    this.ir += `target triple = "arm64-apple-macosx"\n\n`;
    this.ir += `declare i32 @printf(i8*, ...)\n`;
    this.ir += `@.fmt_int = private constant [4 x i8] c"%d\\0A\\00"\n\n`;
  }

  private newReg(prefix = "tmp"): string {
    return `%${prefix}${this.regCounter++}`;
  }

  private newLabel(prefix = "L"): string {
    return `${prefix}${this.labelCounter++}`;
  }

  private emit(code: string): void {
    this.ir += "  ".repeat(this.indent) + code + "\n";
  }

  private getVariable(name: string): Variable | null {
    let variable = this.variables.get(name);
    if (!variable) {
      variable = this.globalVariables.get(name) || null;
    }
    return variable?? null;
  }

  protected defaultResult(): IRValue | null {
    return null;
  }

  visitProgram(ctx: RedLangParser.ProgramContext): IRValue | null {
    for (const child of ctx.children || []) {
      if (child === ctx.EOF()) continue;
      const childType = child.constructor.name;
      if (childType === "DeclarationContext") {
        const declCtx = child as RedLangParser.DeclarationContext;
        const varName = declCtx.IDENT()?.text || "";
        const globalReg = `@${varName}`;
        this.globalVariables.set(varName, { reg: globalReg, type: "i32", isGlobal: true });
        this.emit(`${globalReg} = global i32 0`);
      }
    }

    this.emit("");

    for (const funcCtx of ctx.functionDecl()) {
      this.visitFunctionDecl(funcCtx);
    }

    this.emit("define i32 @main() {");
    this.indent++;
    this.emit("entry:");
    this.indent++;

    for (const child of ctx.children || []) {
      if (child === ctx.EOF()) continue;
      const childType = child.constructor.name;

      if (childType === "StatementContext" || childType === "AssignmentContext" || childType === "PrintStmtContext") {
        this.visit(child as any);
      }
    }

    this.emit("ret i32 0");
    this.indent--;
    this.indent--;
    this.emit("}\n");

    return null;
  }

  visitFunctionDecl(ctx: RedLangParser.FunctionDeclContext): IRValue | null {
    const funcName = ctx.IDENT()?.text || "";
    const params: string[] = [];

    if (ctx.parameters()) {
      for (const p of ctx.parameters()!.param()) {
        params.push(p.IDENT()?.text || "");
      }
    }

    this.functions[funcName] = {
      params,
      block: ctx.block(),
      returnType: ctx.type()?.text || "i",
    };

    const paramStr = params.map((_, i) => `i32 %arg${i}`).join(", ");
    this.emit(`define i32 @${funcName}(${paramStr}) {`);
    this.indent++;
    this.emit("entry:");
    this.indent++;

    const savedVariables = this.variables;
    this.variables = new Map();

    for (let i = 0; i < params.length; i++) {
      const argReg = `%arg${i}`;
      const allocaReg = this.newReg(params[i]);
      this.emit(`${allocaReg} = alloca i32`);
      this.emit(`store i32 ${argReg}, i32* ${allocaReg}`);
      this.variables.set(params[i], { reg: allocaReg, type: "i32", isGlobal: false });
    }

    this.hasReturned = false;
    this.visit(ctx.block());

    if (!this.hasReturned) {
      this.emit("ret i32 0");
    }

    this.indent--;
    this.indent--;
    this.emit("}\n");

    this.variables = savedVariables;
    this.hasReturned = false;

    return null;
  }

  visitAssignment(ctx: RedLangParser.AssignmentContext): IRValue | null {
    const varName = ctx.IDENT()?.text || "";
    const variable = this.getVariable(varName);

    if (!variable) {
      throw new Error(`Variable '${varName}' no declarada`);
    }

    const exprVal = this.visit(ctx.expression()!);
    if (exprVal) {
      this.emit(`store i32 ${exprVal.reg}, i32* ${variable.reg}`);
    }

    return null;
  }

  visitPrintStmt(ctx: RedLangParser.PrintStmtContext): IRValue | null {
    const exprVal = this.visit(ctx.expression()!);
    if (exprVal) {
      const fmtPtr = this.newReg("fmt");
      this.emit(`${fmtPtr} = getelementptr [4 x i8], [4 x i8]* @.fmt_int, i32 0, i32 0`);
      this.emit(`call i32 (i8*, ...) @printf(i8* ${fmtPtr}, i32 ${exprVal.reg})`);
    }
    return null;
  }

  visitReturnStmt(ctx: RedLangParser.ReturnStmtContext): IRValue | null {
    const exprVal = this.visit(ctx.expression()!);
    this.emit(`ret i32 ${exprVal ? exprVal.reg : "0"}`);
    this.hasReturned = true;
    return null;
  }

  visitIfStmt(ctx: RedLangParser.IfStmtContext): IRValue | null {
    const condVal = this.visit(ctx.expression()!);
    const blocks = ctx.block();

    if (!condVal || !blocks || blocks.length === 0) return null;

    const thenLabel = this.newLabel("then");
    const mergeLabel = this.newLabel("merge");

    let cond = condVal.reg;
    if (condVal.type === "i32") {
      const condI1 = this.newReg("cond");
      this.emit(`${condI1} = icmp ne i32 ${condVal.reg}, 0`);
      cond = condI1;
    }

    if (blocks.length > 1) {
      const elseLabel = this.newLabel("else");
      this.emit(`br i1 ${cond}, label %${thenLabel}, label %${elseLabel}`);

      this.emit(`${thenLabel}:`);
      this.indent++;
      this.visit(blocks[0]);
      if (!this.hasReturned) this.emit(`br label %${mergeLabel}`);
      this.indent--;

      this.emit(`${elseLabel}:`);
      this.indent++;
      this.visit(blocks[1]);
      if (!this.hasReturned) this.emit(`br label %${mergeLabel}`);
      this.indent--;
    } else {
      this.emit(`br i1 ${cond}, label %${thenLabel}, label %${mergeLabel}`);

      this.emit(`${thenLabel}:`);
      this.indent++;
      this.visit(blocks[0]);
      if (!this.hasReturned) this.emit(`br label %${mergeLabel}`);
      this.indent--;
    }

    this.emit(`${mergeLabel}:`);
    this.hasReturned = false;
    return null;
  }

  visitWhileStmt(ctx: RedLangParser.WhileStmtContext): IRValue | null {
    const condLabel = this.newLabel("cond");
    const bodyLabel = this.newLabel("body");
    const endLabel = this.newLabel("end");

    this.emit(`br label %${condLabel}`);
    this.emit(`${condLabel}:`);
    this.indent++;

    const condVal = this.visit(ctx.expression()!);
    let cond = condVal!.reg;
    if (condVal!.type === "i32") {
      const condI1 = this.newReg("cond");
      this.emit(`${condI1} = icmp ne i32 ${condVal!.reg}, 0`);
      cond = condI1;
    }
    this.emit(`br i1 ${cond}, label %${bodyLabel}, label %${endLabel}`);
    this.indent--;

    this.emit(`${bodyLabel}:`);
    this.indent++;
    this.visit(ctx.block());
    if (!this.hasReturned) this.emit(`br label %${condLabel}`);
    this.indent--;

    this.emit(`${endLabel}:`);
    this.hasReturned = false;
    return null;
  }

  visitForStmt(ctx: RedLangParser.ForStmtContext): IRValue | null {
    if (ctx.initStmt()) this.visitInitStmt(ctx.initStmt()!);

    const condLabel = this.newLabel("cond");
    const bodyLabel = this.newLabel("body");
    const updateLabel = this.newLabel("update");
    const endLabel = this.newLabel("end");

    this.emit(`br label %${condLabel}`);
    this.emit(`${condLabel}:`);
    this.indent++;

    if (ctx.expression()) {
      const condVal = this.visit(ctx.expression()!);
      let cond = condVal!.reg;
      if (condVal!.type === "i32") {
        const condI1 = this.newReg("cond");
        this.emit(`${condI1} = icmp ne i32 ${condVal!.reg}, 0`);
        cond = condI1;
      }
      this.emit(`br i1 ${cond}, label %${bodyLabel}, label %${endLabel}`);
    } else {
      this.emit(`br label %${bodyLabel}`);
    }
    this.indent--;

    this.emit(`${bodyLabel}:`);
    this.indent++;
    this.visit(ctx.block());
    if (!this.hasReturned) this.emit(`br label %${updateLabel}`);
    this.indent--;

    this.emit(`${updateLabel}:`);
    this.indent++;
    if (ctx.assignment()) this.visitAssignment(ctx.assignment()!);
    this.emit(`br label %${condLabel}`);
    this.indent--;

    this.emit(`${endLabel}:`);
    this.hasReturned = false;
    return null;
  }

  visitInitStmt(ctx: RedLangParser.InitStmtContext): IRValue | null {
    if (ctx.DECLARE()) {
      const varName = ctx.IDENT()?.text || "";
      const allocaReg = this.newReg(varName);

      this.emit(`${allocaReg} = alloca i32`);

      if (ctx.expression()) {
        const exprVal = this.visit(ctx.expression()!);
        if (exprVal) {
          this.emit(`store i32 ${exprVal.reg}, i32* ${allocaReg}`);
        }
      } else {
        this.emit(`store i32 0, i32* ${allocaReg}`);
      }

      this.variables.set(varName, { reg: allocaReg, type: "i32", isGlobal: false });
      return null;
    } else {
      return this.visitAssignment(ctx as any);
    }
  }

  visitBlock(ctx: RedLangParser.BlockContext): IRValue | null {
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
      if (this.hasReturned) break;
    }
    return null;
  }

  visitStatement(ctx: RedLangParser.StatementContext): IRValue | null {
    if (ctx.block()) return this.visitBlock(ctx.block()!);
    if (ctx.assignment()) return this.visitAssignment(ctx.assignment()!);
    if (ctx.ifStmt()) return this.visitIfStmt(ctx.ifStmt()!);
    if (ctx.whileStmt()) return this.visitWhileStmt(ctx.whileStmt()!);
    if (ctx.forStmt()) return this.visitForStmt(ctx.forStmt()!);
    if (ctx.returnStmt()) return this.visitReturnStmt(ctx.returnStmt()!);
    if (ctx.printStmt()) return this.visitPrintStmt(ctx.printStmt()!);
    return null;
  }

  visitExpression(ctx: RedLangParser.ExpressionContext): IRValue | null {
    return this.visit(ctx.logicOr());
  }

  visitLogicOr(ctx: RedLangParser.LogicOrContext): IRValue | null {
    let val = this.visit(ctx.logicAnd(0));
    for (let i = 1; i < ctx.logicAnd().length; i++) {
      const right = this.visit(ctx.logicAnd(i));
      if (val && right) {
        const res = this.newReg("or");
        this.emit(`${res} = or i32 ${val.reg}, ${right.reg}`);
        val = { reg: res, type: "i32" };
      }
    }
    return val;
  }

  visitLogicAnd(ctx: RedLangParser.LogicAndContext): IRValue | null {
    let val = this.visit(ctx.equality(0));
    for (let i = 1; i < ctx.equality().length; i++) {
      const right = this.visit(ctx.equality(i));
      if (val && right) {
        const res = this.newReg("and");
        this.emit(`${res} = and i32 ${val.reg}, ${right.reg}`);
        val = { reg: res, type: "i32" };
      }
    }
    return val;
  }

  visitEquality(ctx: RedLangParser.EqualityContext): IRValue | null {
    let val = this.visit(ctx.comparison(0));
    for (let i = 1; i < ctx.comparison().length; i++) {
      const right = this.visit(ctx.comparison(i));
      const op = ctx.getChild(2 * i - 1).text;

      if (val && right) {
        const res = this.newReg("eq");
        if (op === "==") {
          this.emit(`${res} = icmp eq i32 ${val.reg}, ${right.reg}`);
        } else if (op === "!=") {
          this.emit(`${res} = icmp ne i32 ${val.reg}, ${right.reg}`);
        }
        val = { reg: res, type: "i1" };
      }
    }
    return val;
  }

  visitComparison(ctx: RedLangParser.ComparisonContext): IRValue | null {
    let val = this.visit(ctx.term(0));
    for (let i = 1; i < ctx.term().length; i++) {
      const right = this.visit(ctx.term(i));
      const op = ctx.getChild(2 * i - 1).text;

      if (val && right) {
        const res = this.newReg("cmp");
        if (op === ">") {
          this.emit(`${res} = icmp sgt i32 ${val.reg}, ${right.reg}`);
        } else if (op === "<") {
          this.emit(`${res} = icmp slt i32 ${val.reg}, ${right.reg}`);
        } else if (op === ">=") {
          this.emit(`${res} = icmp sge i32 ${val.reg}, ${right.reg}`);
        } else if (op === "<=") {
          this.emit(`${res} = icmp sle i32 ${val.reg}, ${right.reg}`);
        }
        val = { reg: res, type: "i1" };
      }
    }
    return val;
  }

  visitTerm(ctx: RedLangParser.TermContext): IRValue | null {
    let val = this.visit(ctx.factor(0));
    for (let i = 1; i < ctx.factor().length; i++) {
      const right = this.visit(ctx.factor(i));
      const op = ctx.getChild(2 * i - 1).text;

      if (val && right) {
        const res = this.newReg("term");
        if (op === "+") {
          this.emit(`${res} = add i32 ${val.reg}, ${right.reg}`);
        } else if (op === "-") {
          this.emit(`${res} = sub i32 ${val.reg}, ${right.reg}`);
        }
        val = { reg: res, type: "i32" };
      }
    }
    return val;
  }

  visitFactor(ctx: RedLangParser.FactorContext): IRValue | null {
    let val = this.visit(ctx.unary(0));
    for (let i = 1; i < ctx.unary().length; i++) {
      const right = this.visit(ctx.unary(i));
      const op = ctx.getChild(2 * i - 1).text;

      if (val && right) {
        const res = this.newReg("factor");
        if (op === "*") {
          this.emit(`${res} = mul i32 ${val.reg}, ${right.reg}`);
        } else if (op === "/") {
          this.emit(`${res} = sdiv i32 ${val.reg}, ${right.reg}`);
        } else if (op === "%") {
          this.emit(`${res} = srem i32 ${val.reg}, ${right.reg}`);
        }
        val = { reg: res, type: "i32" };
      }
    }
    return val;
  }

  visitUnary(ctx: RedLangParser.UnaryContext): IRValue | null {
    if (ctx.SUB()) {
      const val = this.visit(ctx.unary()!);
      if (val) {
        const res = this.newReg("neg");
        this.emit(`${res} = sub i32 0, ${val.reg}`);
        return { reg: res, type: "i32" };
      }
    }
    if (ctx.NOT()) {
      const val = this.visit(ctx.unary()!);
      if (val) {
        const res = this.newReg("not");
        this.emit(`${res} = xor i32 ${val.reg}, 1`);
        return { reg: res, type: "i32" };
      }
    }
    return this.visit(ctx.primary()!);
  }

  visitPrimary(ctx: RedLangParser.PrimaryContext): IRValue | null {
    if (ctx.literal()) return this.visitLiteral(ctx.literal()!);
    if (ctx.IDENT()) {
      const name = ctx.IDENT()!.text;
      const variable = this.getVariable(name);
      if (variable) {
        const loadReg = this.newReg(name);
        this.emit(`${loadReg} = load i32, i32* ${variable.reg}`);
        return { reg: loadReg, type: "i32" };
      }
    }
    if (ctx.expression()) return this.visit(ctx.expression()!);
    return null;
  }

  visitLiteral(ctx: RedLangParser.LiteralContext): IRValue | null {
    if (ctx.INT_LIT()) {
      const val = parseInt(ctx.INT_LIT()!.text);
      return { reg: val.toString(), type: "i32" };
    }
    if (ctx.TRUE()) return { reg: "1", type: "i1" };
    if (ctx.FALSE()) return { reg: "0", type: "i1" };
    return null;
  }

  public dumpIR(): string {
    return this.ir;
  }

}