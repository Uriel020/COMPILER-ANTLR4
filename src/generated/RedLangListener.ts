// Generated from src/config/RedLang.g4 by ANTLR 4.9.0-SNAPSHOT


import type { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "../../RedLangParser";
import { TopLevelDeclContext } from "../../RedLangParser";
import { DeclarationContext } from "../../RedLangParser";
import { FunctionDeclContext } from "../../RedLangParser";
import { ParametersContext } from "../../RedLangParser";
import { ParamContext } from "../../RedLangParser";
import { TypeContext } from "../../RedLangParser";
import { BaseTypeContext } from "../../RedLangParser";
import { StatementContext } from "../../RedLangParser";
import { AssignmentContext } from "../../RedLangParser";
import { ReturnStmtContext } from "../../RedLangParser";
import { IfStmtContext } from "../../RedLangParser";
import { WhileStmtContext } from "../../RedLangParser";
import { ForStmtContext } from "../../RedLangParser";
import { ForInitContext } from "../../RedLangParser";
import { ForUpdateContext } from "../../RedLangParser";
import { PrintStmtContext } from "../../RedLangParser";
import { ReadStmtContext } from "../../RedLangParser";
import { FileStmtsContext } from "../../RedLangParser";
import { BlockContext } from "../../RedLangParser";
import { ExpressionContext } from "../../RedLangParser";
import { LogicOrContext } from "../../RedLangParser";
import { LogicAndContext } from "../../RedLangParser";
import { EqualityContext } from "../../RedLangParser";
import { ComparisonContext } from "../../RedLangParser";
import { AdditiveContext } from "../../RedLangParser";
import { MultiplicativeContext } from "../../RedLangParser";
import { UnaryContext } from "../../RedLangParser";
import { PrimaryContext } from "../../RedLangParser";
import { CallExprContext } from "../../RedLangParser";
import { ArrayLiteralContext } from "../../RedLangParser";
import { ArgumentsContext } from "../../RedLangParser";
import { LiteralContext } from "../../RedLangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RedLangParser`.
 */
export interface RedLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RedLangParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.topLevelDecl`.
	 * @param ctx the parse tree
	 */
	enterTopLevelDecl?: (ctx: TopLevelDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.topLevelDecl`.
	 * @param ctx the parse tree
	 */
	exitTopLevelDecl?: (ctx: TopLevelDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	enterWhileStmt?: (ctx: WhileStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	exitWhileStmt?: (ctx: WhileStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.forStmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.forStmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.printStmt`.
	 * @param ctx the parse tree
	 */
	enterPrintStmt?: (ctx: PrintStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.printStmt`.
	 * @param ctx the parse tree
	 */
	exitPrintStmt?: (ctx: PrintStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.readStmt`.
	 * @param ctx the parse tree
	 */
	enterReadStmt?: (ctx: ReadStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.readStmt`.
	 * @param ctx the parse tree
	 */
	exitReadStmt?: (ctx: ReadStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.fileStmts`.
	 * @param ctx the parse tree
	 */
	enterFileStmts?: (ctx: FileStmtsContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.fileStmts`.
	 * @param ctx the parse tree
	 */
	exitFileStmts?: (ctx: FileStmtsContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.logicOr`.
	 * @param ctx the parse tree
	 */
	enterLogicOr?: (ctx: LogicOrContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.logicOr`.
	 * @param ctx the parse tree
	 */
	exitLogicOr?: (ctx: LogicOrContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.logicAnd`.
	 * @param ctx the parse tree
	 */
	enterLogicAnd?: (ctx: LogicAndContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.logicAnd`.
	 * @param ctx the parse tree
	 */
	exitLogicAnd?: (ctx: LogicAndContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.equality`.
	 * @param ctx the parse tree
	 */
	enterEquality?: (ctx: EqualityContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.equality`.
	 * @param ctx the parse tree
	 */
	exitEquality?: (ctx: EqualityContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.additive`.
	 * @param ctx the parse tree
	 */
	enterAdditive?: (ctx: AdditiveContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.additive`.
	 * @param ctx the parse tree
	 */
	exitAdditive?: (ctx: AdditiveContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.multiplicative`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative?: (ctx: MultiplicativeContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.multiplicative`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative?: (ctx: MultiplicativeContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.unary`.
	 * @param ctx the parse tree
	 */
	enterUnary?: (ctx: UnaryContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.unary`.
	 * @param ctx the parse tree
	 */
	exitUnary?: (ctx: UnaryContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.callExpr`.
	 * @param ctx the parse tree
	 */
	enterCallExpr?: (ctx: CallExprContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.callExpr`.
	 * @param ctx the parse tree
	 */
	exitCallExpr?: (ctx: CallExprContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `RedLangParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `RedLangParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
}

