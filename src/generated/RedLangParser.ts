// Generated from ./src/config/RedLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import type { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import type { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import type { TokenStream } from "antlr4ts/TokenStream";
import type { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import type { RedLangListener } from "./RedLangListener";
import type { RedLangVisitor } from "./RedLangVisitor";


export class RedLangParser extends Parser {
	public static readonly DECLARE = 1;
	public static readonly SET = 2;
	public static readonly CHECK = 3;
	public static readonly OTHERWISE = 4;
	public static readonly REPEAT = 5;
	public static readonly LOOP = 6;
	public static readonly FUNC = 7;
	public static readonly GIVE = 8;
	public static readonly SHOW = 9;
	public static readonly ASK = 10;
	public static readonly TRUE = 11;
	public static readonly FALSE = 12;
	public static readonly NULL = 13;
	public static readonly TYPE_INT = 14;
	public static readonly TYPE_FLOAT = 15;
	public static readonly TYPE_STRING = 16;
	public static readonly TYPE_BOOL = 17;
	public static readonly OR = 18;
	public static readonly AND = 19;
	public static readonly NOT = 20;
	public static readonly LPAREN = 21;
	public static readonly RPAREN = 22;
	public static readonly LBRACE = 23;
	public static readonly RBRACE = 24;
	public static readonly LBRACK = 25;
	public static readonly RBRACK = 26;
	public static readonly COMMA = 27;
	public static readonly COLON = 28;
	public static readonly SEMI = 29;
	public static readonly QUESTION = 30;
	public static readonly EQUAL = 31;
	public static readonly EQ = 32;
	public static readonly NEQ = 33;
	public static readonly GT = 34;
	public static readonly LT = 35;
	public static readonly GE = 36;
	public static readonly LE = 37;
	public static readonly ADD = 38;
	public static readonly SUB = 39;
	public static readonly MUL = 40;
	public static readonly DIV = 41;
	public static readonly MOD = 42;
	public static readonly INT_LIT = 43;
	public static readonly FLOAT_LIT = 44;
	public static readonly STRING_LIT = 45;
	public static readonly IDENT = 46;
	public static readonly WS = 47;
	public static readonly LINE_COMMENT = 48;
	public static readonly COMMENT = 49;
	public static readonly RULE_program = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_assignment = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_baseType = 4;
	public static readonly RULE_arrayType = 5;
	public static readonly RULE_functionDecl = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_param = 8;
	public static readonly RULE_returnStmt = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_block = 11;
	public static readonly RULE_ifStmt = 12;
	public static readonly RULE_whileStmt = 13;
	public static readonly RULE_forStmt = 14;
	public static readonly RULE_initStmt = 15;
	public static readonly RULE_printStmt = 16;
	public static readonly RULE_readStmt = 17;
	public static readonly RULE_expression = 18;
	public static readonly RULE_logicOr = 19;
	public static readonly RULE_logicAnd = 20;
	public static readonly RULE_equality = 21;
	public static readonly RULE_comparison = 22;
	public static readonly RULE_term = 23;
	public static readonly RULE_factor = 24;
	public static readonly RULE_unary = 25;
	public static readonly RULE_primary = 26;
	public static readonly RULE_callExpr = 27;
	public static readonly RULE_arrayLiteral = 28;
	public static readonly RULE_arguments = 29;
	public static readonly RULE_literal = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "declaration", "assignment", "type", "baseType", "arrayType", 
		"functionDecl", "parameters", "param", "returnStmt", "statement", "block", 
		"ifStmt", "whileStmt", "forStmt", "initStmt", "printStmt", "readStmt", 
		"expression", "logicOr", "logicAnd", "equality", "comparison", "term", 
		"factor", "unary", "primary", "callExpr", "arrayLiteral", "arguments", 
		"literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'declare'", "'set'", "'check'", "'otherwise'", "'repeat'", 
		"'loop'", "'func'", "'give'", "'show'", "'ask'", "'true'", "'false'", 
		"'null'", "'i'", "'f'", "'s'", "'b'", "'or'", "'and'", "'not'", "'('", 
		"')'", "'{'", "'}'", "'['", "']'", "','", "':'", "';'", "'?'", "'='", 
		"'=='", "'!='", "'>'", "'<'", "'>='", "'<='", "'+'", "'-'", "'*'", "'/'", 
		"'%'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DECLARE", "SET", "CHECK", "OTHERWISE", "REPEAT", "LOOP", "FUNC", 
		"GIVE", "SHOW", "ASK", "TRUE", "FALSE", "NULL", "TYPE_INT", "TYPE_FLOAT", 
		"TYPE_STRING", "TYPE_BOOL", "OR", "AND", "NOT", "LPAREN", "RPAREN", "LBRACE", 
		"RBRACE", "LBRACK", "RBRACK", "COMMA", "COLON", "SEMI", "QUESTION", "EQUAL", 
		"EQ", "NEQ", "GT", "LT", "GE", "LE", "ADD", "SUB", "MUL", "DIV", "MOD", 
		"INT_LIT", "FLOAT_LIT", "STRING_LIT", "IDENT", "WS", "LINE_COMMENT", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RedLangParser._LITERAL_NAMES, RedLangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RedLangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RedLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return RedLangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RedLangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RedLangParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RedLangParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.DECLARE) | (1 << RedLangParser.SET) | (1 << RedLangParser.CHECK) | (1 << RedLangParser.REPEAT) | (1 << RedLangParser.LOOP) | (1 << RedLangParser.FUNC) | (1 << RedLangParser.GIVE) | (1 << RedLangParser.SHOW) | (1 << RedLangParser.ASK) | (1 << RedLangParser.LBRACE))) !== 0)) {
				{
				this.state = 65;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RedLangParser.DECLARE:
					{
					this.state = 62;
					this.declaration();
					}
					break;
				case RedLangParser.FUNC:
					{
					this.state = 63;
					this.functionDecl();
					}
					break;
				case RedLangParser.SET:
				case RedLangParser.CHECK:
				case RedLangParser.REPEAT:
				case RedLangParser.LOOP:
				case RedLangParser.GIVE:
				case RedLangParser.SHOW:
				case RedLangParser.ASK:
				case RedLangParser.LBRACE:
					{
					this.state = 64;
					this.statement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 70;
			this.match(RedLangParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RedLangParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(RedLangParser.DECLARE);
			this.state = 73;
			this.match(RedLangParser.IDENT);
			this.state = 74;
			this.match(RedLangParser.COLON);
			this.state = 75;
			this.type();
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.EQUAL) {
				{
				this.state = 76;
				this.match(RedLangParser.EQUAL);
				this.state = 77;
				this.expression();
				}
			}

			this.state = 80;
			this.match(RedLangParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RedLangParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(RedLangParser.SET);
			this.state = 83;
			this.match(RedLangParser.IDENT);
			this.state = 84;
			this.match(RedLangParser.EQUAL);
			this.state = 85;
			this.expression();
			this.state = 86;
			this.match(RedLangParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RedLangParser.RULE_type);
		let _la: number;
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.baseType();
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RedLangParser.QUESTION) {
					{
					this.state = 89;
					this.match(RedLangParser.QUESTION);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.arrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RedLangParser.RULE_baseType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.TYPE_INT) | (1 << RedLangParser.TYPE_FLOAT) | (1 << RedLangParser.TYPE_STRING) | (1 << RedLangParser.TYPE_BOOL))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RedLangParser.RULE_arrayType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.baseType();
			this.state = 98;
			this.match(RedLangParser.LBRACK);
			this.state = 99;
			this.match(RedLangParser.RBRACK);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.LBRACK) {
				{
				{
				this.state = 100;
				this.match(RedLangParser.LBRACK);
				this.state = 101;
				this.match(RedLangParser.RBRACK);
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RedLangParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(RedLangParser.FUNC);
			this.state = 108;
			this.match(RedLangParser.IDENT);
			this.state = 109;
			this.match(RedLangParser.LPAREN);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.IDENT) {
				{
				this.state = 110;
				this.parameters();
				}
			}

			this.state = 113;
			this.match(RedLangParser.RPAREN);
			this.state = 114;
			this.match(RedLangParser.COLON);
			this.state = 115;
			this.type();
			this.state = 116;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RedLangParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.param();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.COMMA) {
				{
				{
				this.state = 119;
				this.match(RedLangParser.COMMA);
				this.state = 120;
				this.param();
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RedLangParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(RedLangParser.IDENT);
			this.state = 127;
			this.match(RedLangParser.COLON);
			this.state = 128;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RedLangParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(RedLangParser.GIVE);
			this.state = 131;
			this.expression();
			this.state = 132;
			this.match(RedLangParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RedLangParser.RULE_statement);
		try {
			this.state = 142;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedLangParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.block();
				}
				break;
			case RedLangParser.SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.assignment();
				}
				break;
			case RedLangParser.CHECK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 136;
				this.ifStmt();
				}
				break;
			case RedLangParser.REPEAT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 137;
				this.whileStmt();
				}
				break;
			case RedLangParser.LOOP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 138;
				this.forStmt();
				}
				break;
			case RedLangParser.GIVE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 139;
				this.returnStmt();
				}
				break;
			case RedLangParser.SHOW:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 140;
				this.printStmt();
				}
				break;
			case RedLangParser.ASK:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 141;
				this.readStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RedLangParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(RedLangParser.LBRACE);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.SET) | (1 << RedLangParser.CHECK) | (1 << RedLangParser.REPEAT) | (1 << RedLangParser.LOOP) | (1 << RedLangParser.GIVE) | (1 << RedLangParser.SHOW) | (1 << RedLangParser.ASK) | (1 << RedLangParser.LBRACE))) !== 0)) {
				{
				{
				this.state = 145;
				this.statement();
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 151;
			this.match(RedLangParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RedLangParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(RedLangParser.CHECK);
			this.state = 154;
			this.match(RedLangParser.LPAREN);
			this.state = 155;
			this.expression();
			this.state = 156;
			this.match(RedLangParser.RPAREN);
			this.state = 157;
			this.block();
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.OTHERWISE) {
				{
				this.state = 158;
				this.match(RedLangParser.OTHERWISE);
				this.state = 159;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RedLangParser.RULE_whileStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(RedLangParser.REPEAT);
			this.state = 163;
			this.match(RedLangParser.LPAREN);
			this.state = 164;
			this.expression();
			this.state = 165;
			this.match(RedLangParser.RPAREN);
			this.state = 166;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RedLangParser.RULE_forStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(RedLangParser.LOOP);
			this.state = 169;
			this.match(RedLangParser.LPAREN);
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.DECLARE || _la === RedLangParser.SET) {
				{
				this.state = 170;
				this.initStmt();
				}
			}

			this.state = 173;
			this.match(RedLangParser.SEMI);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.TRUE) | (1 << RedLangParser.FALSE) | (1 << RedLangParser.NULL) | (1 << RedLangParser.NOT) | (1 << RedLangParser.LPAREN) | (1 << RedLangParser.LBRACK))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (RedLangParser.SUB - 39)) | (1 << (RedLangParser.INT_LIT - 39)) | (1 << (RedLangParser.FLOAT_LIT - 39)) | (1 << (RedLangParser.STRING_LIT - 39)) | (1 << (RedLangParser.IDENT - 39)))) !== 0)) {
				{
				this.state = 174;
				this.expression();
				}
			}

			this.state = 177;
			this.match(RedLangParser.SEMI);
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.SET) {
				{
				this.state = 178;
				this.assignment();
				}
			}

			this.state = 181;
			this.match(RedLangParser.RPAREN);
			this.state = 182;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initStmt(): InitStmtContext {
		let _localctx: InitStmtContext = new InitStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RedLangParser.RULE_initStmt);
		let _la: number;
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedLangParser.DECLARE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this.match(RedLangParser.DECLARE);
				this.state = 185;
				this.match(RedLangParser.IDENT);
				this.state = 186;
				this.match(RedLangParser.COLON);
				this.state = 187;
				this.type();
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RedLangParser.EQUAL) {
					{
					this.state = 188;
					this.match(RedLangParser.EQUAL);
					this.state = 189;
					this.expression();
					}
				}

				}
				break;
			case RedLangParser.SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 192;
				this.match(RedLangParser.SET);
				this.state = 193;
				this.match(RedLangParser.IDENT);
				this.state = 194;
				this.match(RedLangParser.EQUAL);
				this.state = 195;
				this.expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printStmt(): PrintStmtContext {
		let _localctx: PrintStmtContext = new PrintStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RedLangParser.RULE_printStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(RedLangParser.SHOW);
			this.state = 199;
			this.match(RedLangParser.LPAREN);
			this.state = 200;
			this.expression();
			this.state = 201;
			this.match(RedLangParser.RPAREN);
			this.state = 202;
			this.match(RedLangParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public readStmt(): ReadStmtContext {
		let _localctx: ReadStmtContext = new ReadStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RedLangParser.RULE_readStmt);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 204;
				this.match(RedLangParser.ASK);
				this.state = 205;
				this.match(RedLangParser.LPAREN);
				this.state = 206;
				this.match(RedLangParser.RPAREN);
				this.state = 207;
				this.match(RedLangParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 208;
				this.match(RedLangParser.ASK);
				this.state = 209;
				this.match(RedLangParser.LPAREN);
				this.state = 210;
				this.match(RedLangParser.IDENT);
				this.state = 211;
				this.match(RedLangParser.RPAREN);
				this.state = 212;
				this.match(RedLangParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RedLangParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.logicOr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicOr(): LogicOrContext {
		let _localctx: LogicOrContext = new LogicOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RedLangParser.RULE_logicOr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.logicAnd();
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.OR) {
				{
				{
				this.state = 218;
				this.match(RedLangParser.OR);
				this.state = 219;
				this.logicAnd();
				}
				}
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicAnd(): LogicAndContext {
		let _localctx: LogicAndContext = new LogicAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RedLangParser.RULE_logicAnd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.equality();
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.AND) {
				{
				{
				this.state = 226;
				this.match(RedLangParser.AND);
				this.state = 227;
				this.equality();
				}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equality(): EqualityContext {
		let _localctx: EqualityContext = new EqualityContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RedLangParser.RULE_equality);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.comparison();
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.EQ || _la === RedLangParser.NEQ) {
				{
				{
				this.state = 234;
				_la = this._input.LA(1);
				if (!(_la === RedLangParser.EQ || _la === RedLangParser.NEQ)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 235;
				this.comparison();
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RedLangParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.term();
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RedLangParser.GT - 34)) | (1 << (RedLangParser.LT - 34)) | (1 << (RedLangParser.GE - 34)) | (1 << (RedLangParser.LE - 34)))) !== 0)) {
				{
				{
				this.state = 242;
				_la = this._input.LA(1);
				if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RedLangParser.GT - 34)) | (1 << (RedLangParser.LT - 34)) | (1 << (RedLangParser.GE - 34)) | (1 << (RedLangParser.LE - 34)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 243;
				this.term();
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RedLangParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.factor();
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.ADD || _la === RedLangParser.SUB) {
				{
				{
				this.state = 250;
				_la = this._input.LA(1);
				if (!(_la === RedLangParser.ADD || _la === RedLangParser.SUB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 251;
				this.factor();
				}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RedLangParser.RULE_factor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.unary();
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (RedLangParser.MUL - 40)) | (1 << (RedLangParser.DIV - 40)) | (1 << (RedLangParser.MOD - 40)))) !== 0)) {
				{
				{
				this.state = 258;
				_la = this._input.LA(1);
				if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (RedLangParser.MUL - 40)) | (1 << (RedLangParser.DIV - 40)) | (1 << (RedLangParser.MOD - 40)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 259;
				this.unary();
				}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary(): UnaryContext {
		let _localctx: UnaryContext = new UnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RedLangParser.RULE_unary);
		let _la: number;
		try {
			this.state = 268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedLangParser.NOT:
			case RedLangParser.SUB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 265;
				_la = this._input.LA(1);
				if (!(_la === RedLangParser.NOT || _la === RedLangParser.SUB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 266;
				this.unary();
				}
				break;
			case RedLangParser.TRUE:
			case RedLangParser.FALSE:
			case RedLangParser.NULL:
			case RedLangParser.LPAREN:
			case RedLangParser.LBRACK:
			case RedLangParser.INT_LIT:
			case RedLangParser.FLOAT_LIT:
			case RedLangParser.STRING_LIT:
			case RedLangParser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 267;
				this.primary();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RedLangParser.RULE_primary);
		try {
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 270;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 271;
				this.match(RedLangParser.IDENT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 272;
				this.match(RedLangParser.LPAREN);
				this.state = 273;
				this.expression();
				this.state = 274;
				this.match(RedLangParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 276;
				this.callExpr();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 277;
				this.arrayLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callExpr(): CallExprContext {
		let _localctx: CallExprContext = new CallExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, RedLangParser.RULE_callExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.match(RedLangParser.IDENT);
			this.state = 281;
			this.match(RedLangParser.LPAREN);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.TRUE) | (1 << RedLangParser.FALSE) | (1 << RedLangParser.NULL) | (1 << RedLangParser.NOT) | (1 << RedLangParser.LPAREN) | (1 << RedLangParser.LBRACK))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (RedLangParser.SUB - 39)) | (1 << (RedLangParser.INT_LIT - 39)) | (1 << (RedLangParser.FLOAT_LIT - 39)) | (1 << (RedLangParser.STRING_LIT - 39)) | (1 << (RedLangParser.IDENT - 39)))) !== 0)) {
				{
				this.state = 282;
				this.arguments();
				}
			}

			this.state = 285;
			this.match(RedLangParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RedLangParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(RedLangParser.LBRACK);
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.TRUE) | (1 << RedLangParser.FALSE) | (1 << RedLangParser.NULL) | (1 << RedLangParser.NOT) | (1 << RedLangParser.LPAREN) | (1 << RedLangParser.LBRACK))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (RedLangParser.SUB - 39)) | (1 << (RedLangParser.INT_LIT - 39)) | (1 << (RedLangParser.FLOAT_LIT - 39)) | (1 << (RedLangParser.STRING_LIT - 39)) | (1 << (RedLangParser.IDENT - 39)))) !== 0)) {
				{
				this.state = 288;
				this.arguments();
				}
			}

			this.state = 291;
			this.match(RedLangParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RedLangParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.expression();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.COMMA) {
				{
				{
				this.state = 294;
				this.match(RedLangParser.COMMA);
				this.state = 295;
				this.expression();
				}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, RedLangParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.TRUE) | (1 << RedLangParser.FALSE) | (1 << RedLangParser.NULL))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (RedLangParser.INT_LIT - 43)) | (1 << (RedLangParser.FLOAT_LIT - 43)) | (1 << (RedLangParser.STRING_LIT - 43)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x033\u0132\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x03\x02\x03\x02" +
		"\x07\x02D\n\x02\f\x02\x0E\x02G\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03Q\n\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05]\n\x05\x03" +
		"\x05\x05\x05`\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07i\n\x07\f\x07\x0E\x07l\v\x07\x03\b\x03\b\x03\b\x03\b\x05\b" +
		"r\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t|\n\t\f\t\x0E" +
		"\t\x7F\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x91\n\f\x03\r\x03\r\x07\r\x95" +
		"\n\r\f\r\x0E\r\x98\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xA3\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xAE\n\x10\x03\x10\x03" +
		"\x10\x05\x10\xB2\n\x10\x03\x10\x03\x10\x05\x10\xB6\n\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC1\n" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC7\n\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xD8\n\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x07\x15\xDF\n\x15\f\x15\x0E\x15\xE2\v\x15\x03\x16" +
		"\x03\x16\x03\x16\x07\x16\xE7\n\x16\f\x16\x0E\x16\xEA\v\x16\x03\x17\x03" +
		"\x17\x03\x17\x07\x17\xEF\n\x17\f\x17\x0E\x17\xF2\v\x17\x03\x18\x03\x18" +
		"\x03\x18\x07\x18\xF7\n\x18\f\x18\x0E\x18\xFA\v\x18\x03\x19\x03\x19\x03" +
		"\x19\x07\x19\xFF\n\x19\f\x19\x0E\x19\u0102\v\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x07\x1A\u0107\n\x1A\f\x1A\x0E\x1A\u010A\v\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u010F\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x05\x1C\u0119\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u011E" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u0124\n\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u012B\n\x1F\f\x1F\x0E\x1F\u012E\v" +
		"\x1F\x03 \x03 \x03 \x02\x02\x02!\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02\x02\t\x03\x02\x10\x13\x03\x02\"#\x03\x02$\'\x03\x02()" +
		"\x03\x02*,\x04\x02\x16\x16))\x04\x02\r\x0F-/\x02\u0138\x02E\x03\x02\x02" +
		"\x02\x04J\x03\x02\x02\x02\x06T\x03\x02\x02\x02\b_\x03\x02\x02\x02\na\x03" +
		"\x02\x02\x02\fc\x03\x02\x02\x02\x0Em\x03\x02\x02\x02\x10x\x03\x02\x02" +
		"\x02\x12\x80\x03\x02\x02\x02\x14\x84\x03\x02\x02\x02\x16\x90\x03\x02\x02" +
		"\x02\x18\x92\x03\x02\x02\x02\x1A\x9B\x03\x02\x02\x02\x1C\xA4\x03\x02\x02" +
		"\x02\x1E\xAA\x03\x02\x02\x02 \xC6\x03\x02\x02\x02\"\xC8\x03\x02\x02\x02" +
		"$\xD7\x03\x02\x02\x02&\xD9\x03\x02\x02\x02(\xDB\x03\x02\x02\x02*\xE3\x03" +
		"\x02\x02\x02,\xEB\x03\x02\x02\x02.\xF3\x03\x02\x02\x020\xFB\x03\x02\x02" +
		"\x022\u0103\x03\x02\x02\x024\u010E\x03\x02\x02\x026\u0118\x03\x02\x02" +
		"\x028\u011A\x03\x02\x02\x02:\u0121\x03\x02\x02\x02<\u0127\x03\x02\x02" +
		"\x02>\u012F\x03\x02\x02\x02@D\x05\x04\x03\x02AD\x05\x0E\b\x02BD\x05\x16" +
		"\f\x02C@\x03\x02\x02\x02CA\x03\x02\x02\x02CB\x03\x02\x02\x02DG\x03\x02" +
		"\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02GE\x03\x02" +
		"\x02\x02HI\x07\x02\x02\x03I\x03\x03\x02\x02\x02JK\x07\x03\x02\x02KL\x07" +
		"0\x02\x02LM\x07\x1E\x02\x02MP\x05\b\x05\x02NO\x07!\x02\x02OQ\x05&\x14" +
		"\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x03\x02\x02\x02RS\x07\x1F\x02" +
		"\x02S\x05\x03\x02\x02\x02TU\x07\x04\x02\x02UV\x070\x02\x02VW\x07!\x02" +
		"\x02WX\x05&\x14\x02XY\x07\x1F\x02\x02Y\x07\x03\x02\x02\x02Z\\\x05\n\x06" +
		"\x02[]\x07 \x02\x02\\[\x03\x02\x02\x02\\]\x03\x02\x02\x02]`\x03\x02\x02" +
		"\x02^`\x05\f\x07\x02_Z\x03\x02\x02\x02_^\x03\x02\x02\x02`\t\x03\x02\x02" +
		"\x02ab\t\x02\x02\x02b\v\x03\x02\x02\x02cd\x05\n\x06\x02de\x07\x1B\x02" +
		"\x02ej\x07\x1C\x02\x02fg\x07\x1B\x02\x02gi\x07\x1C\x02\x02hf\x03\x02\x02" +
		"\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02k\r\x03\x02" +
		"\x02\x02lj\x03\x02\x02\x02mn\x07\t\x02\x02no\x070\x02\x02oq\x07\x17\x02" +
		"\x02pr\x05\x10\t\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02" +
		"\x02st\x07\x18\x02\x02tu\x07\x1E\x02\x02uv\x05\b\x05\x02vw\x05\x18\r\x02" +
		"w\x0F\x03\x02\x02\x02x}\x05\x12\n\x02yz\x07\x1D\x02\x02z|\x05\x12\n\x02" +
		"{y\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02" +
		"\x02~\x11\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x070\x02\x02\x81" +
		"\x82\x07\x1E\x02\x02\x82\x83\x05\b\x05\x02\x83\x13\x03\x02\x02\x02\x84" +
		"\x85\x07\n\x02\x02\x85\x86\x05&\x14\x02\x86\x87\x07\x1F\x02\x02\x87\x15" +
		"\x03\x02\x02\x02\x88\x91\x05\x18\r\x02\x89\x91\x05\x06\x04\x02\x8A\x91" +
		"\x05\x1A\x0E\x02\x8B\x91\x05\x1C\x0F\x02\x8C\x91\x05\x1E\x10\x02\x8D\x91" +
		"\x05\x14\v\x02\x8E\x91\x05\"\x12\x02\x8F\x91\x05$\x13\x02\x90\x88\x03" +
		"\x02\x02\x02\x90\x89\x03\x02\x02\x02\x90\x8A\x03\x02\x02\x02\x90\x8B\x03" +
		"\x02\x02\x02\x90\x8C\x03\x02\x02\x02\x90\x8D\x03\x02\x02\x02\x90\x8E\x03" +
		"\x02\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x17\x03\x02\x02\x02\x92\x96\x07" +
		"\x19\x02\x02\x93\x95\x05\x16\f\x02\x94\x93\x03\x02\x02\x02\x95\x98\x03" +
		"\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03" +
		"\x02\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9A\x07\x1A\x02\x02\x9A\x19\x03" +
		"\x02\x02\x02\x9B\x9C\x07\x05\x02\x02\x9C\x9D\x07\x17\x02\x02\x9D\x9E\x05" +
		"&\x14\x02\x9E\x9F\x07\x18\x02\x02\x9F\xA2\x05\x18\r\x02\xA0\xA1\x07\x06" +
		"\x02\x02\xA1\xA3\x05\x18\r\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02" +
		"\x02\x02\xA3\x1B\x03\x02\x02\x02\xA4\xA5\x07\x07\x02\x02\xA5\xA6\x07\x17" +
		"\x02\x02\xA6\xA7\x05&\x14\x02\xA7\xA8\x07\x18\x02\x02\xA8\xA9\x05\x18" +
		"\r\x02\xA9\x1D\x03\x02\x02\x02\xAA\xAB\x07\b\x02\x02\xAB\xAD\x07\x17\x02" +
		"\x02\xAC\xAE\x05 \x11\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02" +
		"\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x07\x1F\x02\x02\xB0\xB2\x05&\x14" +
		"\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02" +
		"\x02\xB3\xB5\x07\x1F\x02\x02\xB4\xB6\x05\x06\x04\x02\xB5\xB4\x03\x02\x02" +
		"\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x07\x18\x02" +
		"\x02\xB8\xB9\x05\x18\r\x02\xB9\x1F\x03\x02\x02\x02\xBA\xBB\x07\x03\x02" +
		"\x02\xBB\xBC\x070\x02\x02\xBC\xBD\x07\x1E\x02\x02\xBD\xC0\x05\b\x05\x02" +
		"\xBE\xBF\x07!\x02\x02\xBF\xC1\x05&\x14\x02\xC0\xBE\x03\x02\x02\x02\xC0" +
		"\xC1\x03\x02\x02\x02\xC1\xC7\x03\x02\x02\x02\xC2\xC3\x07\x04\x02\x02\xC3" +
		"\xC4\x070\x02\x02\xC4\xC5\x07!\x02\x02\xC5\xC7\x05&\x14\x02\xC6\xBA\x03" +
		"\x02\x02\x02\xC6\xC2\x03\x02\x02\x02\xC7!\x03\x02\x02\x02\xC8\xC9\x07" +
		"\v\x02\x02\xC9\xCA\x07\x17\x02\x02\xCA\xCB\x05&\x14\x02\xCB\xCC\x07\x18" +
		"\x02\x02\xCC\xCD\x07\x1F\x02\x02\xCD#\x03\x02\x02\x02\xCE\xCF\x07\f\x02" +
		"\x02\xCF\xD0\x07\x17\x02\x02\xD0\xD1\x07\x18\x02\x02\xD1\xD8\x07\x1F\x02" +
		"\x02\xD2\xD3\x07\f\x02\x02\xD3\xD4\x07\x17\x02\x02\xD4\xD5\x070\x02\x02" +
		"\xD5\xD6\x07\x18\x02\x02\xD6\xD8\x07\x1F\x02\x02\xD7\xCE\x03\x02\x02\x02" +
		"\xD7\xD2\x03\x02\x02\x02\xD8%\x03\x02\x02\x02\xD9\xDA\x05(\x15\x02\xDA" +
		"\'\x03\x02\x02\x02\xDB\xE0\x05*\x16\x02\xDC\xDD\x07\x14\x02\x02\xDD\xDF" +
		"\x05*\x16\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1)\x03\x02\x02\x02\xE2\xE0" +
		"\x03\x02\x02\x02\xE3\xE8\x05,\x17\x02\xE4\xE5\x07\x15\x02\x02\xE5\xE7" +
		"\x05,\x17\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6" +
		"\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9+\x03\x02\x02\x02\xEA\xE8" +
		"\x03\x02\x02\x02\xEB\xF0\x05.\x18\x02\xEC\xED\t\x03\x02\x02\xED\xEF\x05" +
		".\x18\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03" +
		"\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1-\x03\x02\x02\x02\xF2\xF0\x03" +
		"\x02\x02\x02\xF3\xF8\x050\x19\x02\xF4\xF5\t\x04\x02\x02\xF5\xF7\x050\x19" +
		"\x02\xF6\xF4\x03\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02" +
		"\x02\xF8\xF9\x03\x02\x02\x02\xF9/\x03\x02\x02\x02\xFA\xF8\x03\x02\x02" +
		"\x02\xFB\u0100\x052\x1A\x02\xFC\xFD\t\x05\x02\x02\xFD\xFF\x052\x1A\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02" +
		"\x02\u0100\u0101\x03\x02\x02\x02\u01011\x03\x02\x02\x02\u0102\u0100\x03" +
		"\x02\x02\x02\u0103\u0108\x054\x1B\x02\u0104\u0105\t\x06\x02\x02\u0105" +
		"\u0107\x054\x1B\x02\u0106\u0104\x03\x02\x02\x02\u0107\u010A\x03\x02\x02" +
		"\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u01093\x03" +
		"\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010C\t\x07\x02\x02\u010C" +
		"\u010F\x054\x1B\x02\u010D\u010F\x056\x1C\x02\u010E\u010B\x03\x02\x02\x02" +
		"\u010E\u010D\x03\x02\x02\x02\u010F5\x03\x02\x02\x02\u0110\u0119\x05> " +
		"\x02\u0111\u0119\x070\x02\x02\u0112\u0113\x07\x17\x02\x02\u0113\u0114" +
		"\x05&\x14\x02\u0114\u0115\x07\x18\x02\x02\u0115\u0119\x03\x02\x02\x02" +
		"\u0116\u0119\x058\x1D\x02\u0117\u0119\x05:\x1E\x02\u0118\u0110\x03\x02" +
		"\x02\x02\u0118\u0111\x03\x02\x02\x02\u0118\u0112\x03\x02\x02\x02\u0118" +
		"\u0116\x03\x02\x02\x02\u0118\u0117\x03\x02\x02\x02\u01197\x03\x02\x02" +
		"\x02\u011A\u011B\x070\x02\x02\u011B\u011D\x07\x17\x02\x02\u011C\u011E" +
		"\x05<\x1F\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02" +
		"\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x07\x18\x02\x02\u01209\x03\x02" +
		"\x02\x02\u0121\u0123\x07\x1B\x02\x02\u0122\u0124\x05<\x1F\x02\u0123\u0122" +
		"\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02" +
		"\u0125\u0126\x07\x1C\x02\x02\u0126;\x03\x02\x02\x02\u0127\u012C\x05&\x14" +
		"\x02\u0128\u0129\x07\x1D\x02\x02\u0129\u012B\x05&\x14\x02\u012A\u0128" +
		"\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02" +
		"\u012C\u012D\x03\x02\x02\x02\u012D=\x03\x02\x02\x02\u012E\u012C\x03\x02" +
		"\x02\x02\u012F\u0130\t\b\x02\x02\u0130?\x03\x02\x02\x02\x1ECEP\\_jq}\x90" +
		"\x96\xA2\xAD\xB1\xB5\xC0\xC6\xD7\xE0\xE8\xF0\xF8\u0100\u0108\u010E\u0118" +
		"\u011D\u0123\u012C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RedLangParser.__ATN) {
			RedLangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RedLangParser._serializedATN));
		}

		return RedLangParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RedLangParser.EOF, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public functionDecl(): FunctionDeclContext[];
	public functionDecl(i: number): FunctionDeclContext;
	public functionDecl(i?: number): FunctionDeclContext | FunctionDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclContext);
		} else {
			return this.getRuleContext(i, FunctionDeclContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_program; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public DECLARE(): TerminalNode { return this.getToken(RedLangParser.DECLARE, 0); }
	public IDENT(): TerminalNode { return this.getToken(RedLangParser.IDENT, 0); }
	public COLON(): TerminalNode { return this.getToken(RedLangParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public SEMI(): TerminalNode { return this.getToken(RedLangParser.SEMI, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_declaration; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(RedLangParser.SET, 0); }
	public IDENT(): TerminalNode { return this.getToken(RedLangParser.IDENT, 0); }
	public EQUAL(): TerminalNode { return this.getToken(RedLangParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(RedLangParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_assignment; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.QUESTION, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_type; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public TYPE_INT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.TYPE_INT, 0); }
	public TYPE_FLOAT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.TYPE_FLOAT, 0); }
	public TYPE_STRING(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.TYPE_STRING, 0); }
	public TYPE_BOOL(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.TYPE_BOOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_baseType; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitBaseType) {
			return visitor.visitBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext {
		return this.getRuleContext(0, BaseTypeContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.LBRACK);
		} else {
			return this.getToken(RedLangParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.RBRACK);
		} else {
			return this.getToken(RedLangParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(RedLangParser.FUNC, 0); }
	public IDENT(): TerminalNode { return this.getToken(RedLangParser.IDENT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RedLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RedLangParser.RPAREN, 0); }
	public COLON(): TerminalNode { return this.getToken(RedLangParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.COMMA);
		} else {
			return this.getToken(RedLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_parameters; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(RedLangParser.IDENT, 0); }
	public COLON(): TerminalNode { return this.getToken(RedLangParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_param; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public GIVE(): TerminalNode { return this.getToken(RedLangParser.GIVE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(RedLangParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public whileStmt(): WhileStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public printStmt(): PrintStmtContext | undefined {
		return this.tryGetRuleContext(0, PrintStmtContext);
	}
	public readStmt(): ReadStmtContext | undefined {
		return this.tryGetRuleContext(0, ReadStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_statement; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(RedLangParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(RedLangParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_block; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public CHECK(): TerminalNode { return this.getToken(RedLangParser.CHECK, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RedLangParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RedLangParser.RPAREN, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public OTHERWISE(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.OTHERWISE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStmtContext extends ParserRuleContext {
	public REPEAT(): TerminalNode { return this.getToken(RedLangParser.REPEAT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RedLangParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RedLangParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_whileStmt; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterWhileStmt) {
			listener.enterWhileStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitWhileStmt) {
			listener.exitWhileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public LOOP(): TerminalNode { return this.getToken(RedLangParser.LOOP, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RedLangParser.LPAREN, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.SEMI);
		} else {
			return this.getToken(RedLangParser.SEMI, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(RedLangParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public initStmt(): InitStmtContext | undefined {
		return this.tryGetRuleContext(0, InitStmtContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitStmtContext extends ParserRuleContext {
	public DECLARE(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.DECLARE, 0); }
	public IDENT(): TerminalNode { return this.getToken(RedLangParser.IDENT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.SET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_initStmt; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterInitStmt) {
			listener.enterInitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitInitStmt) {
			listener.exitInitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitInitStmt) {
			return visitor.visitInitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStmtContext extends ParserRuleContext {
	public SHOW(): TerminalNode { return this.getToken(RedLangParser.SHOW, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RedLangParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RedLangParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(RedLangParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_printStmt; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterPrintStmt) {
			listener.enterPrintStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitPrintStmt) {
			listener.exitPrintStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitPrintStmt) {
			return visitor.visitPrintStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReadStmtContext extends ParserRuleContext {
	public ASK(): TerminalNode { return this.getToken(RedLangParser.ASK, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RedLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RedLangParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(RedLangParser.SEMI, 0); }
	public IDENT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_readStmt; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterReadStmt) {
			listener.enterReadStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitReadStmt) {
			listener.exitReadStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitReadStmt) {
			return visitor.visitReadStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public logicOr(): LogicOrContext {
		return this.getRuleContext(0, LogicOrContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_expression; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicOrContext extends ParserRuleContext {
	public logicAnd(): LogicAndContext[];
	public logicAnd(i: number): LogicAndContext;
	public logicAnd(i?: number): LogicAndContext | LogicAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicAndContext);
		} else {
			return this.getRuleContext(i, LogicAndContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.OR);
		} else {
			return this.getToken(RedLangParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_logicOr; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterLogicOr) {
			listener.enterLogicOr(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitLogicOr) {
			listener.exitLogicOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitLogicOr) {
			return visitor.visitLogicOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicAndContext extends ParserRuleContext {
	public equality(): EqualityContext[];
	public equality(i: number): EqualityContext;
	public equality(i?: number): EqualityContext | EqualityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityContext);
		} else {
			return this.getRuleContext(i, EqualityContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.AND);
		} else {
			return this.getToken(RedLangParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_logicAnd; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterLogicAnd) {
			listener.enterLogicAnd(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitLogicAnd) {
			listener.exitLogicAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitLogicAnd) {
			return visitor.visitLogicAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityContext extends ParserRuleContext {
	public comparison(): ComparisonContext[];
	public comparison(i: number): ComparisonContext;
	public comparison(i?: number): ComparisonContext | ComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComparisonContext);
		} else {
			return this.getRuleContext(i, ComparisonContext);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.EQ);
		} else {
			return this.getToken(RedLangParser.EQ, i);
		}
	}
	public NEQ(): TerminalNode[];
	public NEQ(i: number): TerminalNode;
	public NEQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.NEQ);
		} else {
			return this.getToken(RedLangParser.NEQ, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_equality; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterEquality) {
			listener.enterEquality(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitEquality) {
			listener.exitEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitEquality) {
			return visitor.visitEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.GT);
		} else {
			return this.getToken(RedLangParser.GT, i);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.LT);
		} else {
			return this.getToken(RedLangParser.LT, i);
		}
	}
	public GE(): TerminalNode[];
	public GE(i: number): TerminalNode;
	public GE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.GE);
		} else {
			return this.getToken(RedLangParser.GE, i);
		}
	}
	public LE(): TerminalNode[];
	public LE(i: number): TerminalNode;
	public LE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.LE);
		} else {
			return this.getToken(RedLangParser.LE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_comparison; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public ADD(): TerminalNode[];
	public ADD(i: number): TerminalNode;
	public ADD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.ADD);
		} else {
			return this.getToken(RedLangParser.ADD, i);
		}
	}
	public SUB(): TerminalNode[];
	public SUB(i: number): TerminalNode;
	public SUB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.SUB);
		} else {
			return this.getToken(RedLangParser.SUB, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_term; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public unary(): UnaryContext[];
	public unary(i: number): UnaryContext;
	public unary(i?: number): UnaryContext | UnaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryContext);
		} else {
			return this.getRuleContext(i, UnaryContext);
		}
	}
	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.MUL);
		} else {
			return this.getToken(RedLangParser.MUL, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.DIV);
		} else {
			return this.getToken(RedLangParser.DIV, i);
		}
	}
	public MOD(): TerminalNode[];
	public MOD(i: number): TerminalNode;
	public MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.MOD);
		} else {
			return this.getToken(RedLangParser.MOD, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_factor; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryContext extends ParserRuleContext {
	public unary(): UnaryContext | undefined {
		return this.tryGetRuleContext(0, UnaryContext);
	}
	public SUB(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.SUB, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.NOT, 0); }
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_unary; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterUnary) {
			listener.enterUnary(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitUnary) {
			listener.exitUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitUnary) {
			return visitor.visitUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.IDENT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.RPAREN, 0); }
	public callExpr(): CallExprContext | undefined {
		return this.tryGetRuleContext(0, CallExprContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_primary; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallExprContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(RedLangParser.IDENT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RedLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RedLangParser.RPAREN, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_callExpr; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterCallExpr) {
			listener.enterCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitCallExpr) {
			listener.exitCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitCallExpr) {
			return visitor.visitCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(RedLangParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(RedLangParser.RBRACK, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedLangParser.COMMA);
		} else {
			return this.getToken(RedLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_arguments; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public INT_LIT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.INT_LIT, 0); }
	public FLOAT_LIT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.FLOAT_LIT, 0); }
	public STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.STRING_LIT, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.FALSE, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_literal; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


