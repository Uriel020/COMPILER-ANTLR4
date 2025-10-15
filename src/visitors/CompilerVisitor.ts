import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import type { RedLangVisitor } from "../generated/RedLangVisitor";
import type {
  ProgramContext,
  DeclarationContext,
  FunctionDeclContext,
  TypeContext,
  AssignmentContext,
  ExpressionContext,
  LiteralContext,
  PrimaryContext,
  UnaryContext,
  FactorContext,
  TermContext,
  ComparisonContext,
  EqualityContext,
  LogicAndContext,
  LogicOrContext,
  PrintStmtContext,
  ReadStmtContext,
  ReturnStmtContext,
  IfStmtContext,
  WhileStmtContext,
  ForStmtContext,
  InitStmtContext,
  BlockContext,
  CallExprContext,
  ArrayLiteralContext,
  ArgumentsContext,
  StatementContext,
} from "../generated/RedLangParser";

type Value = number | string | boolean | null | Value[];

interface FunctionDef {
  params: string[];
  block: BlockContext;
  returnType: string;
}

export default class CompilerVisitor
  extends AbstractParseTreeVisitor<Value>
  implements RedLangVisitor<Value>
{
  memory: Record<string, Value> = {};
  functions: Record<string, FunctionDef> = {};
  private returnValue: Value = null;
  private hasReturned: boolean = false;

  protected defaultResult(): Value {
    return null;
  }

  visitProgram(ctx: ProgramContext): Value {
    for (const child of ctx.functionDecl()) {
      this.visitFunctionDecl(child);
    }

    for (const child of ctx.children || []) {
      if (!this.hasReturned) {
        this.visit(child);
      }
    }
    return null;
  }

  visitDeclaration(ctx: DeclarationContext): Value {
    const varName = ctx.IDENT()?.text || "";
    const typeCtx = ctx.type();
    const expr = ctx.expression();
    const value = expr ? this.visit(expr) : this.getDefaultValue(typeCtx);
    this.memory[varName] = value;
    return value;
  }

  visitFunctionDecl(ctx: FunctionDeclContext): Value {
    const funcName = ctx.IDENT()?.text || "";
    const params: string[] = [];

    if (ctx.parameters()) {
      const paramsCtx = ctx.parameters()!;
      for (const paramCtx of paramsCtx.param()) {
        params.push(paramCtx.IDENT()?.text || "");
      }
    }

    const returnType = ctx.type()?.text || "null";

    this.functions[funcName] = {
      params,
      block: ctx.block(),
      returnType,
    };

    return null;
  }

  visitAssignment(ctx: AssignmentContext): Value {
    const varName = ctx.IDENT()?.text || "";
    if (!(varName in this.memory)) {
      throw new Error(`Variable '${varName}' no está declarada`);
    }
    const expr = ctx.expression();
    const value = expr ? this.visit(expr) : null;
    this.memory[varName] = value;
    return value;
  }

  visitPrintStmt(ctx: PrintStmtContext): Value {
    const value = this.visit(ctx.expression());
    console.log(value);
    return value;
  }

  visitReadStmt(ctx: ReadStmtContext): Value {
    const input = "42";
    const varName = ctx.IDENT()?.text || "";

    if (varName && varName in this.memory) {
      this.memory[varName] = input;
    }

    return input;
  }

  visitReturnStmt(ctx: ReturnStmtContext): Value {
    this.returnValue = this.visit(ctx.expression());
    this.hasReturned = true;
    return this.returnValue;
  }

  visitIfStmt(ctx: IfStmtContext): Value {
    const cond = this.visit(ctx.expression());
    const blocks = ctx.block();

    if (this.isTruthy(cond)) {
      if (this.isTruthy(cond)) {
        const thenBlock = blocks?.[0];
        if (thenBlock) this.visit(thenBlock);
      } else {
        const elseBlock = blocks?.[1];
        if (elseBlock) this.visit(elseBlock);
      }
    }
    return null;
  }

  visitWhileStmt(ctx: WhileStmtContext): Value {
    while (this.isTruthy(this.visit(ctx.expression()))) {
      this.visit(ctx.block());
      if (this.hasReturned) break;
    }
    return null;
  }

  visitForStmt(ctx: ForStmtContext): Value {
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

  visitInitStmt(ctx: InitStmtContext): Value {
    if (ctx.DECLARE()) {
      const varName = ctx.IDENT()?.text || "";
      const typeCtx = ctx.type();
      const expr = ctx.expression();
      const value = expr ? this.visit(expr) : this.getDefaultValue(typeCtx!);
      this.memory[varName] = value;
      return value;
    } else {
      const varName = ctx.IDENT()?.text || "";
      const value = this.visit(ctx.expression()!);
      this.memory[varName] = value;
      return value;
    }
  }

  visitBlock(ctx: BlockContext): Value {
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
      if (this.hasReturned) break;
    }
    return null;
  }

  visitStatement(ctx: StatementContext): Value {
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

  visitExpression(ctx: ExpressionContext): Value {
    return this.visit(ctx.logicOr());
  }

  visitLogicOr(ctx: LogicOrContext): Value {
    let val = this.visit(ctx.logicAnd(0));

    if (ctx.logicAnd().length === 1) return val;

    for (let i = 1; i < ctx.logicAnd().length; i++) {
      if (this.isTruthy(val)) return true; 
    }
    return this.isTruthy(val);
  }

  visitLogicAnd(ctx: LogicAndContext): Value {
    let val = this.visit(ctx.equality(0));

    if (ctx.equality().length === 1) return val;

    for (let i = 1; i < ctx.equality().length; i++) {
      if (!this.isTruthy(val)) return false; 
      val = this.visit(ctx.equality(i));
    }
    return this.isTruthy(val);
  }

  visitEquality(ctx: EqualityContext): Value {
    let val = this.visit(ctx.comparison(0));

    for (let i = 1; i < ctx.comparison().length; i++) {
      const right = this.visit(ctx.comparison(i));
      const op = ctx.getChild(2 * i - 1).text;
      if (op === "==") val = this.equals(val, right);
      else if (op === "!=") val = !this.equals(val, right);
    }
    return val;
  }

  visitComparison(ctx: ComparisonContext): Value {
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

  visitTerm(ctx: TermContext): Value {
    let val = this.visit(ctx.factor(0));

    for (let i = 1; i < ctx.factor().length; i++) {
      const right = this.visit(ctx.factor(i));
      const op = ctx.getChild(2 * i - 1).text;
      if (op === "+") {
        if (typeof val === "string" || typeof right === "string") {
          val = String(val) + String(right);
        } else {
          val = (val as number) + (right as number);
        }
      } else if (op === "-") {
        val = (val as number) - (right as number);
      }
    }
    return val;
  }

  visitFactor(ctx: FactorContext): Value {
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

  visitUnary(ctx: UnaryContext): Value {
    if (ctx.SUB()) {
      return -(this.visit(ctx.unary()!) as number);
    }
    if (ctx.NOT()) {
      return !this.isTruthy(this.visit(ctx.unary()!));
    }
    return this.visit(ctx.primary()!);
  }

  visitPrimary(ctx: PrimaryContext): Value {
    if (ctx.literal()) return this.visitLiteral(ctx.literal()!);
    if (ctx.IDENT()) {
      const name = ctx.IDENT()!.text;
      if (name in this.memory) return this.memory[name] ?? null;
      throw new Error(`Variable '${name}' no definida`);
    }
    if (ctx.expression()) return this.visit(ctx.expression()!);
    if (ctx.callExpr()) return this.visitCallExpr(ctx.callExpr()!);
    if (ctx.arrayLiteral()) return this.visitArrayLiteral(ctx.arrayLiteral()!);
    return null;
  }

  visitLiteral(ctx: LiteralContext): Value {
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

  visitCallExpr(ctx: CallExprContext): Value {
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

  visitArrayLiteral(ctx: ArrayLiteralContext): Value {
    if (!ctx.arguments()) return [];
    return this.getArguments(ctx.arguments()!);
  }

  visitArguments(ctx: ArgumentsContext): Value[] {
    return this.getArguments(ctx);
  }

  private getArguments(ctx: ArgumentsContext | undefined): Value[] {
    if (!ctx) return [];
    const args: Value[] = [];
    for (const expr of ctx.expression()) {
      args.push(this.visit(expr));
    }
    return args;
  }

  private callUserFunction(
    fnName: string,
    argsCtx: ArgumentsContext | undefined
  ): Value {
    const func = this.functions[fnName];
    const args = this.getArguments(argsCtx);

    if (args.length !== func?.params.length) {
      throw new Error(
        `Función '${fnName}' espera ${func?.params.length} argumentos, pero recibió ${args.length}`
      );
    }

    const savedMemory = { ...this.memory };
    const savedHasReturned = this.hasReturned;

    if (func?.params) {
      for (let i = 0; i < func.params.length; i++) {
        const paramName = func.params[i];
        if (paramName) {
          this.memory[paramName] = args[i] ?? null;
        }
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

  private getDefaultValue(typeCtx: TypeContext): Value {
    if (typeCtx.arrayType()) {
      return [];
    }

    if (typeCtx.QUESTION()) {
      return null;
    }

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
}
