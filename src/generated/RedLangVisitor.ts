// Generated from src/config/RedLang.g4 by ANTLR 4.9.0-SNAPSHOT


import type { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./RedLangParser";
import { TopLevelDeclContext } from "./RedLangParser";
import { DeclarationContext } from "./RedLangParser";
import { FunctionDeclContext } from "./RedLangParser";
import { ParametersContext } from "./RedLangParser";
import { ParamContext } from "./RedLangParser";
import { TypeContext } from "./RedLangParser";
import { BaseTypeContext } from "./RedLangParser";
import { StatementContext } from "./RedLangParser";
import { AssignmentContext } from "./RedLangParser";
import { ReturnStmtContext } from "./RedLangParser";
import { IfStmtContext } from "./RedLangParser";
import { WhileStmtContext } from "./RedLangParser";
import { ForStmtContext } from "./RedLangParser";
import { ForInitContext } from "./RedLangParser";
import { ForUpdateContext } from "./RedLangParser";
import { PrintStmtContext } from "./RedLangParser";
import { ReadStmtContext } from "./RedLangParser";
import { FileStmtsContext } from "./RedLangParser";
import { BlockContext } from "./RedLangParser";
import { ExpressionContext } from "./RedLangParser";
import { LogicOrContext } from "./RedLangParser";
import { LogicAndContext } from "./RedLangParser";
import { EqualityContext } from "./RedLangParser";
import { ComparisonContext } from "./RedLangParser";
import { AdditiveContext } from "./RedLangParser";
import { MultiplicativeContext } from "./RedLangParser";
import { UnaryContext } from "./RedLangParser";
import { PrimaryContext } from "./RedLangParser";
import { CallExprContext } from "./RedLangParser";
import { ArrayLiteralContext } from "./RedLangParser";
import { ArgumentsContext } from "./RedLangParser";
import { LiteralContext } from "./RedLangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RedLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RedLangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RedLangParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.topLevelDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelDecl?: (ctx: TopLevelDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.whileStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt?: (ctx: ForStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.printStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStmt?: (ctx: PrintStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.readStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadStmt?: (ctx: ReadStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.fileStmts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileStmts?: (ctx: FileStmtsContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.logicOr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicOr?: (ctx: LogicOrContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.logicAnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicAnd?: (ctx: LogicAndContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.equality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality?: (ctx: EqualityContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.additive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive?: (ctx: AdditiveContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.multiplicative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative?: (ctx: MultiplicativeContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.unary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary?: (ctx: UnaryContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.callExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpr?: (ctx: CallExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `RedLangParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
}

