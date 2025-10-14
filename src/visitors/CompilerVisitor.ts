import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import type { RedLangVisitor } from "../generated/RedLangVisitor";
import type {
  ProgramContext,
  DeclarationContext,
  AssignmentContext,
  ExpressionContext,
  LiteralContext,
  PrimaryContext,
  UnaryContext,
  MultiplicativeContext,
  AdditiveContext,
  ComparisonContext,
  EqualityContext,
  LogicAndContext,
  LogicOrContext,
  PrintStmtContext,
  ReturnStmtContext,
} from "../generated/RedLangParser";

type Value = number | string | boolean | null;

export default class CompilerVisitor
  extends AbstractParseTreeVisitor<Value>
  implements RedLangVisitor<Value>
{
  memory: Record<string, Value> = {};

  protected defaultResult(): Value {
    return null;
  }

  visitProgram(ctx: ProgramContext): Value {
    for (const child of ctx.children || []) {
      this.visit(child);
    }
    return null;
  }

  visitDeclaration(ctx: DeclarationContext): Value {
    const identNode = ctx.IDENT();
    const varName = identNode ? identNode.text : "";
    const typeNode = ctx.type();
    const declaredType = typeNode ? typeNode.text : "";
    const expr = ctx.expression();
    const value = expr ? this.visit(expr as any) : null;

    this.checkType(declaredType, value, varName);
    this.memory[varName] = value;
    return value;
  }

  visitAssignment(ctx: AssignmentContext): Value {
    const identNode = ctx.IDENT();
    const varName = identNode ? identNode.text : "";
    if (!Object.prototype.hasOwnProperty.call(this.memory, varName))
      throw new Error(`Variable ${varName} no definida`);

    const expr = ctx.expression();
    const value = expr ? this.visit(expr as any) : null;
    const declaredType = this.inferType(this.memory[varName] as Value);

    this.checkType(declaredType, value, varName);
    this.memory[varName] = value;
    return value;
  }

  visitPrintStmt(ctx: PrintStmtContext): Value {
    const value = this.visit(ctx.expression());
    console.log(value);
    return value;
  }

  visitReturnStmt(ctx: ReturnStmtContext): Value {
    return this.visit(ctx.expression());
  }

  visitExpression(ctx: ExpressionContext): Value {
    return this.visit(ctx.logicOr());
  }

  visitLogicOr(ctx: LogicOrContext): Value {
    let value = this.visit(ctx.logicAnd(0));
    for (let i = 1; i < ctx.logicAnd().length; i++) {
      value = value || this.visit(ctx.logicAnd(i));
    }
    return value;
  }

  visitLogicAnd(ctx: LogicAndContext): Value {
    let value = this.visit(ctx.equality(0));
    for (let i = 1; i < ctx.equality().length; i++) {
      value = value && this.visit(ctx.equality(i));
    }
    return value;
  }

  visitEquality(ctx: EqualityContext): Value {
    let value = this.visit(ctx.comparison(0));
    if (ctx.comparison().length > 1) {
      const left = value;
      const right = this.visit(ctx.comparison(1));
      const opNode = ctx.getChild(1);
      const op = typeof (opNode as any).text === 'string' ? (opNode as any).text : (opNode as any).getText?.() ?? '';
      switch (op) {
        case "==":
          return left == right;
        case "!=":
          return left != right;
      }
    }
    return value;
  }

  visitComparison(ctx: ComparisonContext): Value {
    let value = this.visit(ctx.additive(0));
    if (ctx.additive().length > 1) {
      const left = value;
      const right = this.visit(ctx.additive(1));
      if (left === null || right === null) {
        throw new Error('Cannot compare null values');
      }
      const opNode = ctx.getChild(1);
      const op = typeof (opNode as any).text === 'string' ? (opNode as any).text : (opNode as any).getText?.() ?? '';
      switch (op) {
        case ">":
          return left > right;
        case "<":
          return left < right;
        case ">=":
          return left >= right;
        case "<=":
          return left <= right;
      }
    }
    return value;
  }

  visitAdditive(ctx: AdditiveContext): Value {
    let value = this.visit(ctx.multiplicative(0));
    for (let i = 1; i < ctx.multiplicative().length; i++) {
      const opNode = ctx.getChild(2 * i - 1);
      const op = typeof (opNode as any).text === 'string' ? (opNode as any).text : (opNode as any).getText?.() ?? '';
      const right = this.visit(ctx.multiplicative(i));
      switch (op) {
        case "+":
          value = (value as number) + (right as number);
          break;
        case "-":
          value = (value as number) - (right as number);
          break;
      }
    }
    return value;
  }

  visitMultiplicative(ctx: MultiplicativeContext): Value {
    let value = this.visit(ctx.unary(0));
    for (let i = 1; i < ctx.unary().length; i++) {
      const opNode = ctx.getChild(2 * i - 1);
      const op = typeof (opNode as any).text === 'string' ? (opNode as any).text : (opNode as any).getText?.() ?? '';
      const right = this.visit(ctx.unary(i));
      switch (op) {
        case "*":
          value = (value as number) * (right as number);
          break;
        case "/":
          value = (value as number) / (right as number);
          break;
        case "%":
          value = (value as number) % (right as number);
          break;
      }
    }
    return value;
  }

  visitUnary(ctx: UnaryContext): Value {
    const unaryCtx = ctx.unary();
    if (unaryCtx) {
      if (ctx.SUB()) {
        const v = this.visit(unaryCtx as any);
        return typeof v === 'number' ? -v : null;
      }
      if (ctx.NOT()) {
        const v = this.visit(unaryCtx as any);
        return typeof v === 'boolean' ? !v : null;
      }
    }
    const primaryCtx = ctx.primary();
    return primaryCtx ? this.visit(primaryCtx as any) : null;
  }

  visitPrimary(ctx: PrimaryContext): Value {
    if (ctx.literal()) return this.visit(ctx.literal() as any);
    if (ctx.IDENT()) {
      const identNode = ctx.IDENT();
      const varName = identNode ? identNode.text : "";
      if (!Object.prototype.hasOwnProperty.call(this.memory, varName))
        throw new Error(`Variable ${varName} no definida`);
      return this.memory[varName] as Value;
    }
    if (ctx.expression()) return this.visit(ctx.expression() as any);
    return null;
  }

  visitLiteral(ctx: LiteralContext): Value {
    if (ctx.INT_LIT()) return parseInt(ctx.INT_LIT()!.text);
    if (ctx.FLOAT_LIT()) return parseFloat(ctx.FLOAT_LIT()!.text);
    if (ctx.STRING_LIT()) {
      const t = ctx.STRING_LIT()!.text;
      return t.slice(1, -1);
    }
    if (ctx.TRUE()) return true;
    if (ctx.FALSE()) return false;
    if (ctx.NULL()) return null;
    return null;
  }

  private checkType(expected: string, value: Value, varName: string) {
    switch (expected) {
      case "i":
        if (typeof value !== "number" || !Number.isInteger(value))
          throw new Error(`Variable ${varName} debe ser integer`);
        break;
      case "f":
        if (typeof value !== "number")
          throw new Error(`Variable ${varName} debe ser float`);
        break;
      case "s":
        if (typeof value !== "string")
          throw new Error(`Variable ${varName} debe ser string`);
        break;
      case "b":
        if (typeof value !== "boolean")
          throw new Error(`Variable ${varName} debe ser boolean`);
        break;
    }
  }

  private inferType(value: Value): string {
    switch (typeof value) {
      case "number":
        return Number.isInteger(value) ? "i" : "f";
      case "string":
        return "s";
      case "boolean":
        return "b";
      default:
        return "null";
    }
  }
}
