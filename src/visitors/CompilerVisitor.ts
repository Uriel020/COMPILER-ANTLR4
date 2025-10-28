import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import type { RedLangVisitor } from "../generated/RedLangVisitor";
import type * as RedLangParser from "../generated/RedLangParser";

type Value = number | string | boolean | null | Value[];

interface FunctionDef {
  params: string[];
  block: RedLangParser.BlockContext;
  returnType: string;
}

interface Variable {
  name: string;
  reg: string;
}

export default class LLVMVisitor
  extends AbstractParseTreeVisitor<Value>
  implements RedLangVisitor<Value>
{
  private ir: string = '';
  private indent: number = 0;
  private labelCounter: number = 0;
  private regCounter: number = 0;

  memory: Record<string, Value> = {};
  variables: Map<string, Variable> = new Map();
  functions: Record<string, FunctionDef> = {};
  private returnValue: Value = null;
  private hasReturned: boolean = false;
  private currentFunction: string | null = null;

  constructor(moduleName = "red_module") {
    super();
    this.ir = `; ModuleID = '${moduleName}'\n`;
    this.ir += `target datalayout = "e-m:o-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128"\n`;
    this.ir += `target triple = "x86_64-apple-macosx10.7.0"\n\n`;
    this.ir += `declare i32 @printf(i8*, ...)\n\n`;
  }

  private newLabel(prefix: string = "L"): string {
    return `${prefix}${this.labelCounter++}`;
  }

  private newReg(prefix: string = "tmp"): string {
    return `%${prefix}${this.regCounter++}`;
  }

  private emit(code: string): void {
    this.ir += "  ".repeat(this.indent) + code + "\n";
  }

  protected defaultResult(): Value {
    return null;
  }

  visitProgram(ctx: RedLangParser.ProgramContext): Value {
    for (const child of ctx.functionDecl()) {
      this.visitFunctionDecl(child);
    }

    this.emit("define i32 @main() {");
    this.indent++;
    this.emit("entry:");
    this.indent++;
    this.currentFunction = "main";

    for (const child of ctx.children || []) {
      if (child === ctx.EOF()) continue;
      const childCtx = child as any;
      if (childCtx.constructor.name === "DeclarationContext") {
        this.visitDeclaration(childCtx);
      } else if (childCtx.constructor.name === "StatementContext" || 
                 childCtx.constructor.name === "AssignmentContext" ||
                 childCtx.constructor.name === "IfStmtContext" ||
                 childCtx.constructor.name === "WhileStmtContext" ||
                 childCtx.constructor.name === "PrintStmtContext") {
        this.visit(childCtx);
      }
      if (this.hasReturned) break;
    }

    if (!this.hasReturned) {
      this.emit("ret i32 0");
    }

    this.indent--;
    this.indent--;
    this.emit("}\n");
    this.currentFunction = null;

    return null;
  }

  visitDeclaration(ctx: RedLangParser.DeclarationContext): Value {
    const varName = ctx.IDENT()?.text || "";
    const expr = ctx.expression();
    let value = 0;

    if (expr) {
      value = this.visit(expr) as number;
    } else {
      value = this.getDefaultValue(ctx.type()) as number;
    }

    const reg = this.newReg(varName);
    this.emit(`${reg} = alloca i32`);
    this.emit(`store i32 ${value}, i32* ${reg}`);
    this.variables.set(varName, { name: varName, reg });
    this.memory[varName] = value;

    return value;
  }

  visitFunctionDecl(ctx: RedLangParser.FunctionDeclContext): Value {
    const funcName = ctx.IDENT()?.text || "";
    const params: string[] = [];

    if (ctx.parameters()) {
      for (const paramCtx of ctx.parameters()!.param()) {
        params.push(paramCtx.IDENT()?.text || "");
      }
    }

    const returnType = ctx.type()?.text || "null";

    this.functions[funcName] = {
      params,
      block: ctx.block(),
      returnType,
    };

    const paramStr = params.map((p, i) => `i32 %arg${i}`).join(", ");
    this.emit(`define i32 @${funcName}(${paramStr}) {`);
    this.indent++;
    this.emit("entry:");
    this.indent++;
    this.currentFunction = funcName;

    for (let i = 0; i < params.length; i++) {
      const reg = this.newReg(params[i]);
      this.emit(`${reg} = alloca i32`);
      this.emit(`store i32 %arg${i}, i32* ${reg}`);
      this.variables.set(params[i] as string, { name: params[i], reg });
    }

    this.hasReturned = false;
    this.visit(ctx.block());

    if (!this.hasReturned) {
      this.emit("ret i32 0");
    }

    this.indent--;
    this.indent--;
    this.emit("}\n");

    this.variables.clear();
    this.hasReturned = false;
    this.returnValue = null;
    this.currentFunction = null;

    return null;
  }

  visitAssignment(ctx: RedLangParser.AssignmentContext): Value {
    const varName = ctx.IDENT()?.text || "";
    const exprVal = this.visit(ctx.expression()) as number;

    const variable = this.variables.get(varName);
    if (!variable) {
      throw new Error(`Variable '${varName}' no está declarada`);
    }

    this.emit(`store i32 ${exprVal}, i32* ${variable.reg}`);
    this.memory[varName] = exprVal;
    return exprVal;
  }

  visitPrintStmt(ctx: RedLangParser.PrintStmtContext): Value {
    const value = this.visit(ctx.expression()) as number;
    const fmt = `@.str = private constant [4 x i8] c"%d\\0A\\00"`;
    this.emit(`call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([4 x i8], [4 x i8]* @.str, i32 0, i32 0), i32 ${value})`);
    console.log(value);
    return value;
  }

  visitReadStmt(ctx: RedLangParser.ReadStmtContext): Value {
    return "42";
  }

  visitReturnStmt(ctx: RedLangParser.ReturnStmtContext): Value {
    this.returnValue = this.visit(ctx.expression());
    this.hasReturned = true;
    const val = this.returnValue as number;
    this.emit(`ret i32 ${val}`);
    return this.returnValue;
  }

  visitIfStmt(ctx: RedLangParser.IfStmtContext): Value {
    const cond = this.visit(ctx.expression());
    const blocks = ctx.block();

    if (this.isTruthy(cond)) {
      const thenBlock = blocks?.[0];
      if (thenBlock) this.visit(thenBlock);
    } else {
      const elseBlock = blocks?.[1];
      if (elseBlock) this.visit(elseBlock);
    }
    return null;
  }

  visitWhileStmt(ctx: RedLangParser.WhileStmtContext): Value {
    while (this.isTruthy(this.visit(ctx.expression()))) {
      this.visit(ctx.block());
      if (this.hasReturned) break;
    }
    return null;
  }

  visitForStmt(ctx: RedLangParser.ForStmtContext): Value {
    const initCtx = ctx.initStmt();
    const condCtx = ctx.expression();
    const updateCtx = ctx.assignment();
    const blockCtx = ctx.block();

    if (initCtx) this.visitInitStmt(initCtx);

    while (!condCtx || this.isTruthy(this.visit(condCtx))) {
      if (blockCtx) this.visit(blockCtx);
      if (this.hasReturned) break;
      if (updateCtx) this.visitAssignment(updateCtx);
    }

    return null;
  }

  visitInitStmt(ctx: RedLangParser.InitStmtContext): Value {
    if (ctx.DECLARE()) {
      const varName = ctx.IDENT()?.text || "";
      const expr = ctx.expression();
      const value = expr ? (this.visit(expr) as number) : (this.getDefaultValue(ctx.type()!) as number);

      const reg = this.newReg(varName);
      this.emit(`${reg} = alloca i32`);
      this.emit(`store i32 ${value}, i32* ${reg}`);
      this.variables.set(varName, { name: varName, reg });
      this.memory[varName] = value;
      return value;
    } else {
      const varName = ctx.IDENT()?.text || "";
      const value = this.visit(ctx.expression()!) as number;
      const variable = this.variables.get(varName);
      if (!variable) {
        throw new Error(`Variable ${varName} no declarada`);
      }
      this.emit(`store i32 ${value}, i32* ${variable.reg}`);
      this.memory[varName] = value;
      return value;
    }
  }

  visitBlock(ctx: RedLangParser.BlockContext): Value {
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
      if (this.hasReturned) break;
    }
    return null;
  }

  visitStatement(ctx: RedLangParser.StatementContext): Value {
    if (ctx.block()) return this.visitBlock(ctx.block()!);
    if (ctx.assignment()) return this.visitAssignment(ctx.assignment()!);
    if (ctx.ifStmt()) return this.visitIfStmt(ctx.ifStmt()!);
    if (ctx.whileStmt()) return this.visitWhileStmt(ctx.whileStmt()!);
    if (ctx.forStmt()) return this.visitForStmt(ctx.forStmt()!);
    if (ctx.returnStmt()) return this.visitReturnStmt(ctx.returnStmt()!);
    if (ctx.printStmt()) return this.visitPrintStmt(ctx.printStmt()!);
    if (ctx.readStmt()) return this.visitReadStmt(ctx.readStmt()!);
    return null;
  }

  visitExpression(ctx: RedLangParser.ExpressionContext): Value {
    return this.visit(ctx.logicOr());
  }

  visitLogicOr(ctx: RedLangParser.LogicOrContext): Value {
    let val = this.visit(ctx.logicAnd(0));
    if (ctx.logicAnd().length === 1) return val;
    for (let i = 1; i < ctx.logicAnd().length; i++) {
      if (this.isTruthy(val)) return true;
      val = this.visit(ctx.logicAnd(i));
    }
    return this.isTruthy(val);
  }

  visitLogicAnd(ctx: RedLangParser.LogicAndContext): Value {
    let val = this.visit(ctx.equality(0));
    if (ctx.equality().length === 1) return val;
    for (let i = 1; i < ctx.equality().length; i++) {
      if (!this.isTruthy(val)) return false;
      val = this.visit(ctx.equality(i));
    }
    return this.isTruthy(val);
  }

  visitEquality(ctx: RedLangParser.EqualityContext): Value {
    let val = this.visit(ctx.comparison(0));
    for (let i = 1; i < ctx.comparison().length; i++) {
      const right = this.visit(ctx.comparison(i));
      const op = ctx.getChild(2 * i - 1).text;
      if (op === "==") val = this.equals(val, right);
      else if (op === "!=") val = !this.equals(val, right);
    }
    return val;
  }

  visitComparison(ctx: RedLangParser.ComparisonContext): Value {
    let val = this.visit(ctx.term(0));
    for (let i = 1; i < ctx.term().length; i++) {
      const right = this.visit(ctx.term(i));
      const op = ctx.getChild(2 * i - 1).text;
      switch (op) {
        case ">":
          val = (val as number) > (right as number);
          break;
        case "<":
          val = (val as number) < (right as number);
          break;
        case ">=":
          val = (val as number) >= (right as number);
          break;
        case "<=":
          val = (val as number) <= (right as number);
          break;
      }
    }
    return val;
  }

  visitTerm(ctx: RedLangParser.TermContext): Value {
    let val = this.visit(ctx.factor(0));
    for (let i = 1; i < ctx.factor().length; i++) {
      const right = this.visit(ctx.factor(i));
      const op = ctx.getChild(2 * i - 1).text;
      if (op === "+") {
        val = (val as number) + (right as number);
      } else if (op === "-") {
        val = (val as number) - (right as number);
      }
    }
    return val;
  }

  visitFactor(ctx: RedLangParser.FactorContext): Value {
    let val = this.visit(ctx.unary(0));
    for (let i = 1; i < ctx.unary().length; i++) {
      const right = this.visit(ctx.unary(i));
      const op = ctx.getChild(2 * i - 1).text;
      if (op === "*") val = (val as number) * (right as number);
      else if (op === "/") {
        if ((right as number) === 0) throw new Error("División por cero");
        val = (val as number) / (right as number);
      } else if (op === "%") val = (val as number) % (right as number);
    }
    return val;
  }

  visitUnary(ctx: RedLangParser.UnaryContext): Value {
    if (ctx.SUB()) return -(this.visit(ctx.unary()!) as number);
    if (ctx.NOT()) return !this.isTruthy(this.visit(ctx.unary()!));
    return this.visit(ctx.primary()!);
  }

  visitPrimary(ctx: RedLangParser.PrimaryContext): Value {
    if (ctx.literal()) return this.visitLiteral(ctx.literal()!);
    if (ctx.IDENT()) {
      const name = ctx.IDENT()!.text;
      if (name in this.memory) return this.memory[name] ?? null;
      const variable = this.variables.get(name);
      if (variable) return this.memory[name] ?? 0;
      throw new Error(`Variable '${name}' no definida`);
    }
    if (ctx.expression()) return this.visit(ctx.expression()!);
    if (ctx.callExpr()) return this.visitCallExpr(ctx.callExpr()!);
    if (ctx.arrayLiteral()) return this.visitArrayLiteral(ctx.arrayLiteral()!);
    return null;
  }

  visitLiteral(ctx: RedLangParser.LiteralContext): Value {
    if (ctx.INT_LIT()) return parseInt(ctx.INT_LIT()!.text);
    if (ctx.FLOAT_LIT()) return parseFloat(ctx.FLOAT_LIT()!.text);
    if (ctx.STRING_LIT()) {
      const text = ctx.STRING_LIT()!.text;
      return text.slice(1, -1);
    }
    if (ctx.TRUE()) return true;
    if (ctx.FALSE()) return false;
    if (ctx.NULL()) return null;
    return null;
  }

  visitCallExpr(ctx: RedLangParser.CallExprContext): Value {
    const fnName = ctx.IDENT()?.text || "";
    if (fnName === "show") {
      const args = this.getArguments(ctx.arguments());
      const value = args[0] ?? null;
      console.log(value);
      return value;
    }
    if (fnName in this.functions) {
      return this.callUserFunction(fnName, ctx.arguments());
    }
    throw new Error(`Función '${fnName}' no está definida`);
  }

  visitArrayLiteral(ctx: RedLangParser.ArrayLiteralContext): Value {
    if (!ctx.arguments()) return [];
    return this.getArguments(ctx.arguments()!);
  }

  visitArguments(ctx: RedLangParser.ArgumentsContext): Value[] {
    return this.getArguments(ctx);
  }

  private getArguments(ctx: RedLangParser.ArgumentsContext | undefined): Value[] {
    if (!ctx) return [];
    const args: Value[] = [];
    for (const expr of ctx.expression()) {
      args.push(this.visit(expr));
    }
    return args;
  }

  private callUserFunction(fnName: string, argsCtx: RedLangParser.ArgumentsContext | undefined): Value {
    const func = this.functions[fnName];
    const args = this.getArguments(argsCtx);

    if (args.length !== func?.params.length) {
      throw new Error(`Función '${fnName}' espera ${func?.params.length} argumentos, pero recibió ${args.length}`);
    }

    const savedMemory = { ...this.memory };
    const savedHasReturned = this.hasReturned;

    if (func?.params) {
      for (let i = 0; i < func.params.length; i++) {
        this.memory[func.params[i]] = args[i] ?? null;
      }
    }

    if (func) {
      this.hasReturned = false;
      this.visit(func.block);
    }
    const result = this.returnValue;

    this.memory = savedMemory;
    this.hasReturned = savedHasReturned;
    this.returnValue = null;

    return result;
  }

  private getDefaultValue(typeCtx: RedLangParser.TypeContext): Value {
    if (typeCtx.arrayType()) return [];
    if (typeCtx.QUESTION()) return null;

    const baseTypeCtx = typeCtx.baseType();
    if (!baseTypeCtx) return null;

    if (baseTypeCtx.TYPE_INT()) return 0;
    if (baseTypeCtx.TYPE_FLOAT()) return 0.0;
    if (baseTypeCtx.TYPE_STRING()) return "";
    if (baseTypeCtx.TYPE_BOOL()) return false;

    return null;
  }

  private isTruthy(value: Value): boolean {
    if (value === null || value === false) return false;
    if (value === 0 || value === "") return false;
    return true;
  }

  private equals(left: Value, right: Value): boolean {
    return left === right;
  }

  public dumpIR(): string {
    return this.ir;
  }
}