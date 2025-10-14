// Generated from src/config/RedLang.g4 by ANTLR 4.9.0-SNAPSHOT


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

import type { RedLangListener } from "./src/generated/RedLangListener";
import type { RedLangVisitor } from "./RedLangVisitor";


export class RedLangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly DECLARE = 5;
	public static readonly SET = 6;
	public static readonly CHECK = 7;
	public static readonly OTHERWISE = 8;
	public static readonly REPEAT = 9;
	public static readonly LOOP = 10;
	public static readonly FUNC = 11;
	public static readonly GIVE = 12;
	public static readonly SHOW = 13;
	public static readonly ASK = 14;
	public static readonly TRUE = 15;
	public static readonly FALSE = 16;
	public static readonly NULL = 17;
	public static readonly READFILE = 18;
	public static readonly WRITEFILE = 19;
	public static readonly OPEN = 20;
	public static readonly CLOSE = 21;
	public static readonly AS = 22;
	public static readonly LPAREN = 23;
	public static readonly RPAREN = 24;
	public static readonly LBRACE = 25;
	public static readonly RBRACE = 26;
	public static readonly LBRACK = 27;
	public static readonly RBRACK = 28;
	public static readonly COMMA = 29;
	public static readonly COLON = 30;
	public static readonly SEMI = 31;
	public static readonly QUESTION = 32;
	public static readonly EQUAL = 33;
	public static readonly EQ = 34;
	public static readonly NEQ = 35;
	public static readonly GT = 36;
	public static readonly LT = 37;
	public static readonly GE = 38;
	public static readonly LE = 39;
	public static readonly ADD = 40;
	public static readonly SUB = 41;
	public static readonly MUL = 42;
	public static readonly DIV = 43;
	public static readonly MOD = 44;
	public static readonly INT_LIT = 45;
	public static readonly FLOAT_LIT = 46;
	public static readonly STRING_LIT = 47;
	public static readonly IDENT = 48;
	public static readonly WS = 49;
	public static readonly LINE_COMMENT = 50;
	public static readonly COMMENT = 51;
	public static readonly OR = 52;
	public static readonly AND = 53;
	public static readonly NOT = 54;
	public static readonly RULE_program = 0;
	public static readonly RULE_topLevelDecl = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_functionDecl = 3;
	public static readonly RULE_parameters = 4;
	public static readonly RULE_param = 5;
	public static readonly RULE_type = 6;
	public static readonly RULE_baseType = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_assignment = 9;
	public static readonly RULE_returnStmt = 10;
	public static readonly RULE_ifStmt = 11;
	public static readonly RULE_whileStmt = 12;
	public static readonly RULE_forStmt = 13;
	public static readonly RULE_forInit = 14;
	public static readonly RULE_forUpdate = 15;
	public static readonly RULE_printStmt = 16;
	public static readonly RULE_readStmt = 17;
	public static readonly RULE_fileStmts = 18;
	public static readonly RULE_block = 19;
	public static readonly RULE_expression = 20;
	public static readonly RULE_logicOr = 21;
	public static readonly RULE_logicAnd = 22;
	public static readonly RULE_equality = 23;
	public static readonly RULE_comparison = 24;
	public static readonly RULE_additive = 25;
	public static readonly RULE_multiplicative = 26;
	public static readonly RULE_unary = 27;
	public static readonly RULE_primary = 28;
	public static readonly RULE_callExpr = 29;
	public static readonly RULE_arrayLiteral = 30;
	public static readonly RULE_arguments = 31;
	public static readonly RULE_literal = 32;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "topLevelDecl", "declaration", "functionDecl", "parameters", 
		"param", "type", "baseType", "statement", "assignment", "returnStmt", 
		"ifStmt", "whileStmt", "forStmt", "forInit", "forUpdate", "printStmt", 
		"readStmt", "fileStmts", "block", "expression", "logicOr", "logicAnd", 
		"equality", "comparison", "additive", "multiplicative", "unary", "primary", 
		"callExpr", "arrayLiteral", "arguments", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'i'", "'f'", "'s'", "'b'", "'declare'", "'set'", "'check'", 
		"'otherwise'", "'repeat'", "'loop'", "'func'", "'give'", "'show'", "'ask'", 
		"'true'", "'false'", "'null'", "'readfile'", "'writefile'", "'open'", 
		"'close'", "'as'", "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "':'", 
		"';'", "'?'", "'='", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", "'+'", 
		"'-'", "'*'", "'/'", "'%'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "DECLARE", "SET", 
		"CHECK", "OTHERWISE", "REPEAT", "LOOP", "FUNC", "GIVE", "SHOW", "ASK", 
		"TRUE", "FALSE", "NULL", "READFILE", "WRITEFILE", "OPEN", "CLOSE", "AS", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "COMMA", "COLON", 
		"SEMI", "QUESTION", "EQUAL", "EQ", "NEQ", "GT", "LT", "GE", "LE", "ADD", 
		"SUB", "MUL", "DIV", "MOD", "INT_LIT", "FLOAT_LIT", "STRING_LIT", "IDENT", 
		"WS", "LINE_COMMENT", "COMMENT", "OR", "AND", "NOT",
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
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.DECLARE) | (1 << RedLangParser.SET) | (1 << RedLangParser.CHECK) | (1 << RedLangParser.REPEAT) | (1 << RedLangParser.LOOP) | (1 << RedLangParser.FUNC) | (1 << RedLangParser.GIVE) | (1 << RedLangParser.SHOW) | (1 << RedLangParser.ASK) | (1 << RedLangParser.READFILE) | (1 << RedLangParser.WRITEFILE) | (1 << RedLangParser.OPEN) | (1 << RedLangParser.CLOSE) | (1 << RedLangParser.LBRACE))) !== 0)) {
				{
				this.state = 68;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RedLangParser.DECLARE:
				case RedLangParser.FUNC:
					{
					this.state = 66;
					this.topLevelDecl();
					}
					break;
				case RedLangParser.SET:
				case RedLangParser.CHECK:
				case RedLangParser.REPEAT:
				case RedLangParser.LOOP:
				case RedLangParser.GIVE:
				case RedLangParser.SHOW:
				case RedLangParser.ASK:
				case RedLangParser.READFILE:
				case RedLangParser.WRITEFILE:
				case RedLangParser.OPEN:
				case RedLangParser.CLOSE:
				case RedLangParser.LBRACE:
					{
					this.state = 67;
					this.statement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 73;
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
	public topLevelDecl(): TopLevelDeclContext {
		let _localctx: TopLevelDeclContext = new TopLevelDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RedLangParser.RULE_topLevelDecl);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedLangParser.DECLARE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.declaration();
				}
				break;
			case RedLangParser.FUNC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.functionDecl();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RedLangParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(RedLangParser.DECLARE);
			this.state = 80;
			this.match(RedLangParser.IDENT);
			this.state = 81;
			this.match(RedLangParser.COLON);
			this.state = 82;
			this.type();
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.EQUAL) {
				{
				this.state = 83;
				this.match(RedLangParser.EQUAL);
				this.state = 84;
				this.expression();
				}
			}

			this.state = 87;
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
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RedLangParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(RedLangParser.FUNC);
			this.state = 90;
			this.match(RedLangParser.IDENT);
			this.state = 91;
			this.match(RedLangParser.LPAREN);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.IDENT) {
				{
				this.state = 92;
				this.parameters();
				}
			}

			this.state = 95;
			this.match(RedLangParser.RPAREN);
			this.state = 96;
			this.match(RedLangParser.COLON);
			this.state = 97;
			this.type();
			this.state = 98;
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
		this.enterRule(_localctx, 8, RedLangParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.param();
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.COMMA) {
				{
				{
				this.state = 101;
				this.match(RedLangParser.COMMA);
				this.state = 102;
				this.param();
				}
				}
				this.state = 107;
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
		this.enterRule(_localctx, 10, RedLangParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(RedLangParser.IDENT);
			this.state = 109;
			this.match(RedLangParser.COLON);
			this.state = 110;
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RedLangParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.baseType();
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.QUESTION) {
				{
				this.state = 113;
				this.match(RedLangParser.QUESTION);
				}
			}

			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.LBRACK) {
				{
				{
				this.state = 116;
				this.match(RedLangParser.LBRACK);
				this.state = 117;
				this.match(RedLangParser.RBRACK);
				}
				}
				this.state = 122;
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
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RedLangParser.RULE_baseType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.T__0) | (1 << RedLangParser.T__1) | (1 << RedLangParser.T__2) | (1 << RedLangParser.T__3))) !== 0))) {
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RedLangParser.RULE_statement);
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedLangParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.block();
				}
				break;
			case RedLangParser.SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.assignment();
				}
				break;
			case RedLangParser.CHECK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 127;
				this.ifStmt();
				}
				break;
			case RedLangParser.REPEAT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 128;
				this.whileStmt();
				}
				break;
			case RedLangParser.LOOP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 129;
				this.forStmt();
				}
				break;
			case RedLangParser.GIVE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 130;
				this.returnStmt();
				}
				break;
			case RedLangParser.SHOW:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 131;
				this.printStmt();
				}
				break;
			case RedLangParser.ASK:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 132;
				this.readStmt();
				}
				break;
			case RedLangParser.READFILE:
			case RedLangParser.WRITEFILE:
			case RedLangParser.OPEN:
			case RedLangParser.CLOSE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 133;
				this.fileStmts();
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RedLangParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(RedLangParser.SET);
			this.state = 137;
			this.match(RedLangParser.IDENT);
			this.state = 138;
			this.match(RedLangParser.EQUAL);
			this.state = 139;
			this.expression();
			this.state = 140;
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
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RedLangParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(RedLangParser.GIVE);
			this.state = 143;
			this.expression();
			this.state = 144;
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
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RedLangParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(RedLangParser.CHECK);
			this.state = 147;
			this.match(RedLangParser.LPAREN);
			this.state = 148;
			this.expression();
			this.state = 149;
			this.match(RedLangParser.RPAREN);
			this.state = 150;
			this.block();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.OTHERWISE) {
				{
				this.state = 151;
				this.match(RedLangParser.OTHERWISE);
				this.state = 152;
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
		this.enterRule(_localctx, 24, RedLangParser.RULE_whileStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(RedLangParser.REPEAT);
			this.state = 156;
			this.match(RedLangParser.LPAREN);
			this.state = 157;
			this.expression();
			this.state = 158;
			this.match(RedLangParser.RPAREN);
			this.state = 159;
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
		this.enterRule(_localctx, 26, RedLangParser.RULE_forStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(RedLangParser.LOOP);
			this.state = 162;
			this.match(RedLangParser.LPAREN);
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.DECLARE || _la === RedLangParser.SET) {
				{
				this.state = 163;
				this.forInit();
				}
			}

			this.state = 166;
			this.match(RedLangParser.SEMI);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.TRUE) | (1 << RedLangParser.FALSE) | (1 << RedLangParser.NULL) | (1 << RedLangParser.LPAREN) | (1 << RedLangParser.LBRACK))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (RedLangParser.SUB - 41)) | (1 << (RedLangParser.INT_LIT - 41)) | (1 << (RedLangParser.FLOAT_LIT - 41)) | (1 << (RedLangParser.STRING_LIT - 41)) | (1 << (RedLangParser.IDENT - 41)) | (1 << (RedLangParser.NOT - 41)))) !== 0)) {
				{
				this.state = 167;
				this.expression();
				}
			}

			this.state = 170;
			this.match(RedLangParser.SEMI);
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedLangParser.SET) {
				{
				this.state = 171;
				this.forUpdate();
				}
			}

			this.state = 174;
			this.match(RedLangParser.RPAREN);
			this.state = 175;
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
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RedLangParser.RULE_forInit);
		try {
			this.state = 182;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedLangParser.DECLARE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 177;
				this.declaration();
				}
				break;
			case RedLangParser.SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				this.match(RedLangParser.SET);
				this.state = 179;
				this.match(RedLangParser.IDENT);
				this.state = 180;
				this.match(RedLangParser.EQUAL);
				this.state = 181;
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
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RedLangParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(RedLangParser.SET);
			this.state = 185;
			this.match(RedLangParser.IDENT);
			this.state = 186;
			this.match(RedLangParser.EQUAL);
			this.state = 187;
			this.expression();
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
			this.state = 189;
			this.match(RedLangParser.SHOW);
			this.state = 190;
			this.match(RedLangParser.LPAREN);
			this.state = 191;
			this.expression();
			this.state = 192;
			this.match(RedLangParser.RPAREN);
			this.state = 193;
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
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 195;
				this.match(RedLangParser.ASK);
				this.state = 196;
				this.match(RedLangParser.LPAREN);
				this.state = 197;
				this.match(RedLangParser.RPAREN);
				this.state = 198;
				this.match(RedLangParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 199;
				this.match(RedLangParser.ASK);
				this.state = 200;
				this.match(RedLangParser.LPAREN);
				this.state = 201;
				this.match(RedLangParser.IDENT);
				this.state = 202;
				this.match(RedLangParser.RPAREN);
				this.state = 203;
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
	public fileStmts(): FileStmtsContext {
		let _localctx: FileStmtsContext = new FileStmtsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RedLangParser.RULE_fileStmts);
		try {
			this.state = 231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedLangParser.READFILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.match(RedLangParser.READFILE);
				this.state = 207;
				this.match(RedLangParser.LPAREN);
				this.state = 208;
				this.match(RedLangParser.STRING_LIT);
				this.state = 209;
				this.match(RedLangParser.RPAREN);
				this.state = 210;
				this.match(RedLangParser.SEMI);
				}
				break;
			case RedLangParser.WRITEFILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this.match(RedLangParser.WRITEFILE);
				this.state = 212;
				this.match(RedLangParser.LPAREN);
				this.state = 213;
				this.match(RedLangParser.STRING_LIT);
				this.state = 214;
				this.match(RedLangParser.COMMA);
				this.state = 215;
				this.expression();
				this.state = 216;
				this.match(RedLangParser.RPAREN);
				this.state = 217;
				this.match(RedLangParser.SEMI);
				}
				break;
			case RedLangParser.OPEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 219;
				this.match(RedLangParser.OPEN);
				this.state = 220;
				this.match(RedLangParser.LPAREN);
				this.state = 221;
				this.match(RedLangParser.STRING_LIT);
				this.state = 222;
				this.match(RedLangParser.AS);
				this.state = 223;
				this.match(RedLangParser.IDENT);
				this.state = 224;
				this.match(RedLangParser.RPAREN);
				this.state = 225;
				this.match(RedLangParser.SEMI);
				}
				break;
			case RedLangParser.CLOSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 226;
				this.match(RedLangParser.CLOSE);
				this.state = 227;
				this.match(RedLangParser.LPAREN);
				this.state = 228;
				this.match(RedLangParser.IDENT);
				this.state = 229;
				this.match(RedLangParser.RPAREN);
				this.state = 230;
				this.match(RedLangParser.SEMI);
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
		this.enterRule(_localctx, 38, RedLangParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(RedLangParser.LBRACE);
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.SET) | (1 << RedLangParser.CHECK) | (1 << RedLangParser.REPEAT) | (1 << RedLangParser.LOOP) | (1 << RedLangParser.GIVE) | (1 << RedLangParser.SHOW) | (1 << RedLangParser.ASK) | (1 << RedLangParser.READFILE) | (1 << RedLangParser.WRITEFILE) | (1 << RedLangParser.OPEN) | (1 << RedLangParser.CLOSE) | (1 << RedLangParser.LBRACE))) !== 0)) {
				{
				{
				this.state = 234;
				this.statement();
				}
				}
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 240;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RedLangParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
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
		this.enterRule(_localctx, 42, RedLangParser.RULE_logicOr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.logicAnd();
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.OR) {
				{
				{
				this.state = 245;
				this.match(RedLangParser.OR);
				this.state = 246;
				this.logicAnd();
				}
				}
				this.state = 251;
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
		this.enterRule(_localctx, 44, RedLangParser.RULE_logicAnd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.equality();
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.AND) {
				{
				{
				this.state = 253;
				this.match(RedLangParser.AND);
				this.state = 254;
				this.equality();
				}
				}
				this.state = 259;
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
		this.enterRule(_localctx, 46, RedLangParser.RULE_equality);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.comparison();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.EQ || _la === RedLangParser.NEQ) {
				{
				{
				this.state = 261;
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
				this.state = 262;
				this.comparison();
				}
				}
				this.state = 267;
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
		this.enterRule(_localctx, 48, RedLangParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.additive();
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RedLangParser.GT - 36)) | (1 << (RedLangParser.LT - 36)) | (1 << (RedLangParser.GE - 36)) | (1 << (RedLangParser.LE - 36)))) !== 0)) {
				{
				{
				this.state = 269;
				_la = this._input.LA(1);
				if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RedLangParser.GT - 36)) | (1 << (RedLangParser.LT - 36)) | (1 << (RedLangParser.GE - 36)) | (1 << (RedLangParser.LE - 36)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 270;
				this.additive();
				}
				}
				this.state = 275;
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
	public additive(): AdditiveContext {
		let _localctx: AdditiveContext = new AdditiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RedLangParser.RULE_additive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.multiplicative();
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.ADD || _la === RedLangParser.SUB) {
				{
				{
				this.state = 277;
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
				this.state = 278;
				this.multiplicative();
				}
				}
				this.state = 283;
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
	public multiplicative(): MultiplicativeContext {
		let _localctx: MultiplicativeContext = new MultiplicativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RedLangParser.RULE_multiplicative);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.unary();
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (RedLangParser.MUL - 42)) | (1 << (RedLangParser.DIV - 42)) | (1 << (RedLangParser.MOD - 42)))) !== 0)) {
				{
				{
				this.state = 285;
				_la = this._input.LA(1);
				if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (RedLangParser.MUL - 42)) | (1 << (RedLangParser.DIV - 42)) | (1 << (RedLangParser.MOD - 42)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 286;
				this.unary();
				}
				}
				this.state = 291;
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
		this.enterRule(_localctx, 54, RedLangParser.RULE_unary);
		let _la: number;
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedLangParser.SUB:
			case RedLangParser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 292;
				_la = this._input.LA(1);
				if (!(_la === RedLangParser.SUB || _la === RedLangParser.NOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 293;
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
				this.state = 294;
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
		this.enterRule(_localctx, 56, RedLangParser.RULE_primary);
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 297;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 298;
				this.match(RedLangParser.IDENT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 299;
				this.match(RedLangParser.LPAREN);
				this.state = 300;
				this.expression();
				this.state = 301;
				this.match(RedLangParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 303;
				this.callExpr();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 304;
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
		this.enterRule(_localctx, 58, RedLangParser.RULE_callExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(RedLangParser.IDENT);
			this.state = 308;
			this.match(RedLangParser.LPAREN);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.TRUE) | (1 << RedLangParser.FALSE) | (1 << RedLangParser.NULL) | (1 << RedLangParser.LPAREN) | (1 << RedLangParser.LBRACK))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (RedLangParser.SUB - 41)) | (1 << (RedLangParser.INT_LIT - 41)) | (1 << (RedLangParser.FLOAT_LIT - 41)) | (1 << (RedLangParser.STRING_LIT - 41)) | (1 << (RedLangParser.IDENT - 41)) | (1 << (RedLangParser.NOT - 41)))) !== 0)) {
				{
				this.state = 309;
				this.arguments();
				}
			}

			this.state = 312;
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
		this.enterRule(_localctx, 60, RedLangParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(RedLangParser.LBRACK);
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.TRUE) | (1 << RedLangParser.FALSE) | (1 << RedLangParser.NULL) | (1 << RedLangParser.LPAREN) | (1 << RedLangParser.LBRACK))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (RedLangParser.SUB - 41)) | (1 << (RedLangParser.INT_LIT - 41)) | (1 << (RedLangParser.FLOAT_LIT - 41)) | (1 << (RedLangParser.STRING_LIT - 41)) | (1 << (RedLangParser.IDENT - 41)) | (1 << (RedLangParser.NOT - 41)))) !== 0)) {
				{
				this.state = 315;
				this.arguments();
				}
			}

			this.state = 318;
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
		this.enterRule(_localctx, 62, RedLangParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.expression();
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedLangParser.COMMA) {
				{
				{
				this.state = 321;
				this.match(RedLangParser.COMMA);
				this.state = 322;
				this.expression();
				}
				}
				this.state = 327;
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
		this.enterRule(_localctx, 64, RedLangParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedLangParser.TRUE) | (1 << RedLangParser.FALSE) | (1 << RedLangParser.NULL))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (RedLangParser.INT_LIT - 45)) | (1 << (RedLangParser.FLOAT_LIT - 45)) | (1 << (RedLangParser.STRING_LIT - 45)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\u014D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03\x02" +
		"\x03\x02\x07\x02G\n\x02\f\x02\x0E\x02J\v\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x05\x03P\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04X\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05`\n" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07" +
		"\x06j\n\x06\f\x06\x0E\x06m\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x05\bu\n\b\x03\b\x03\b\x07\by\n\b\f\b\x0E\b|\v\b\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x89\n\n\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\x9C\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA7\n\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\xAB\n\x0F\x03\x0F\x03\x0F\x05\x0F\xAF\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xB9\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\xCF\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\xEA\n\x14\x03\x15\x03\x15\x07\x15\xEE\n\x15\f" +
		"\x15\x0E\x15\xF1\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x17\x07\x17\xFA\n\x17\f\x17\x0E\x17\xFD\v\x17\x03\x18\x03\x18\x03" +
		"\x18\x07\x18\u0102\n\x18\f\x18\x0E\x18\u0105\v\x18\x03\x19\x03\x19\x03" +
		"\x19\x07\x19\u010A\n\x19\f\x19\x0E\x19\u010D\v\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x07\x1A\u0112\n\x1A\f\x1A\x0E\x1A\u0115\v\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x07\x1B\u011A\n\x1B\f\x1B\x0E\x1B\u011D\v\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\u0122\n\x1C\f\x1C\x0E\x1C\u0125\v\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x05\x1D\u012A\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u0134\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0139" +
		"\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u013F\n \x03 \x03 \x03!\x03!\x03" +
		"!\x07!\u0146\n!\f!\x0E!\u0149\v!\x03\"\x03\"\x03\"\x02\x02\x02#\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02\x02\t\x03\x02" +
		"\x03\x06\x03\x02$%\x03\x02&)\x03\x02*+\x03\x02,.\x04\x02++88\x04\x02\x11" +
		"\x13/1\x02\u0153\x02H\x03\x02\x02\x02\x04O\x03\x02\x02\x02\x06Q\x03\x02" +
		"\x02\x02\b[\x03\x02\x02\x02\nf\x03\x02\x02\x02\fn\x03\x02\x02\x02\x0E" +
		"r\x03\x02\x02\x02\x10}\x03\x02\x02\x02\x12\x88\x03\x02\x02\x02\x14\x8A" +
		"\x03\x02\x02\x02\x16\x90\x03\x02\x02\x02\x18\x94\x03\x02\x02\x02\x1A\x9D" +
		"\x03\x02\x02\x02\x1C\xA3\x03\x02\x02\x02\x1E\xB8\x03\x02\x02\x02 \xBA" +
		"\x03\x02\x02\x02\"\xBF\x03\x02\x02\x02$\xCE\x03\x02\x02\x02&\xE9\x03\x02" +
		"\x02\x02(\xEB\x03\x02\x02\x02*\xF4\x03\x02\x02\x02,\xF6\x03\x02\x02\x02" +
		".\xFE\x03\x02\x02\x020\u0106\x03\x02\x02\x022\u010E\x03\x02\x02\x024\u0116" +
		"\x03\x02\x02\x026\u011E\x03\x02\x02\x028\u0129\x03\x02\x02\x02:\u0133" +
		"\x03\x02\x02\x02<\u0135\x03\x02\x02\x02>\u013C\x03\x02\x02\x02@\u0142" +
		"\x03\x02\x02\x02B\u014A\x03\x02\x02\x02DG\x05\x04\x03\x02EG\x05\x12\n" +
		"\x02FD\x03\x02\x02\x02FE\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02" +
		"\x02HI\x03\x02\x02\x02IK\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x07\x02\x02" +
		"\x03L\x03\x03\x02\x02\x02MP\x05\x06\x04\x02NP\x05\b\x05\x02OM\x03\x02" +
		"\x02\x02ON\x03\x02\x02\x02P\x05\x03\x02\x02\x02QR\x07\x07\x02\x02RS\x07" +
		"2\x02\x02ST\x07 \x02\x02TW\x05\x0E\b\x02UV\x07#\x02\x02VX\x05*\x16\x02" +
		"WU\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x07!\x02\x02" +
		"Z\x07\x03\x02\x02\x02[\\\x07\r\x02\x02\\]\x072\x02\x02]_\x07\x19\x02\x02" +
		"^`\x05\n\x06\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02" +
		"ab\x07\x1A\x02\x02bc\x07 \x02\x02cd\x05\x0E\b\x02de\x05(\x15\x02e\t\x03" +
		"\x02\x02\x02fk\x05\f\x07\x02gh\x07\x1F\x02\x02hj\x05\f\x07\x02ig\x03\x02" +
		"\x02\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02l\v\x03" +
		"\x02\x02\x02mk\x03\x02\x02\x02no\x072\x02\x02op\x07 \x02\x02pq\x05\x0E" +
		"\b\x02q\r\x03\x02\x02\x02rt\x05\x10\t\x02su\x07\"\x02\x02ts\x03\x02\x02" +
		"\x02tu\x03\x02\x02\x02uz\x03\x02\x02\x02vw\x07\x1D\x02\x02wy\x07\x1E\x02" +
		"\x02xv\x03\x02\x02\x02y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02" +
		"\x02{\x0F\x03\x02\x02\x02|z\x03\x02\x02\x02}~\t\x02\x02\x02~\x11\x03\x02" +
		"\x02\x02\x7F\x89\x05(\x15\x02\x80\x89\x05\x14\v\x02\x81\x89\x05\x18\r" +
		"\x02\x82\x89\x05\x1A\x0E\x02\x83\x89\x05\x1C\x0F\x02\x84\x89\x05\x16\f" +
		"\x02\x85\x89\x05\"\x12\x02\x86\x89\x05$\x13\x02\x87\x89\x05&\x14\x02\x88" +
		"\x7F\x03\x02\x02\x02\x88\x80\x03\x02\x02\x02\x88\x81\x03\x02\x02\x02\x88" +
		"\x82\x03\x02\x02\x02\x88\x83\x03\x02\x02\x02\x88\x84\x03\x02\x02\x02\x88" +
		"\x85\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x87\x03\x02\x02\x02\x89" +
		"\x13\x03\x02\x02\x02\x8A\x8B\x07\b\x02\x02\x8B\x8C\x072\x02\x02\x8C\x8D" +
		"\x07#\x02\x02\x8D\x8E\x05*\x16\x02\x8E\x8F\x07!\x02\x02\x8F\x15\x03\x02" +
		"\x02\x02\x90\x91\x07\x0E\x02\x02\x91\x92\x05*\x16\x02\x92\x93\x07!\x02" +
		"\x02\x93\x17\x03\x02\x02\x02\x94\x95\x07\t\x02\x02\x95\x96\x07\x19\x02" +
		"\x02\x96\x97\x05*\x16\x02\x97\x98\x07\x1A\x02\x02\x98\x9B\x05(\x15\x02" +
		"\x99\x9A\x07\n\x02\x02\x9A\x9C\x05(\x15\x02\x9B\x99\x03\x02\x02\x02\x9B" +
		"\x9C\x03\x02\x02\x02\x9C\x19\x03\x02\x02\x02\x9D\x9E\x07\v\x02\x02\x9E" +
		"\x9F\x07\x19\x02\x02\x9F\xA0\x05*\x16\x02\xA0\xA1\x07\x1A\x02\x02\xA1" +
		"\xA2\x05(\x15\x02\xA2\x1B\x03\x02\x02\x02\xA3\xA4\x07\f\x02\x02\xA4\xA6" +
		"\x07\x19\x02\x02\xA5\xA7\x05\x1E\x10\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7" +
		"\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x07!\x02\x02\xA9\xAB" +
		"\x05*\x16\x02\xAA\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC" +
		"\x03\x02\x02\x02\xAC\xAE\x07!\x02\x02\xAD\xAF\x05 \x11\x02\xAE\xAD\x03" +
		"\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x07" +
		"\x1A\x02\x02\xB1\xB2\x05(\x15\x02\xB2\x1D\x03\x02\x02\x02\xB3\xB9\x05" +
		"\x06\x04\x02\xB4\xB5\x07\b\x02\x02\xB5\xB6\x072\x02\x02\xB6\xB7\x07#\x02" +
		"\x02\xB7\xB9\x05*\x16\x02\xB8\xB3\x03\x02\x02\x02\xB8\xB4\x03\x02\x02" +
		"\x02\xB9\x1F\x03\x02\x02\x02\xBA\xBB\x07\b\x02\x02\xBB\xBC\x072\x02\x02" +
		"\xBC\xBD\x07#\x02\x02\xBD\xBE\x05*\x16\x02\xBE!\x03\x02\x02\x02\xBF\xC0" +
		"\x07\x0F\x02\x02\xC0\xC1\x07\x19\x02\x02\xC1\xC2\x05*\x16\x02\xC2\xC3" +
		"\x07\x1A\x02\x02\xC3\xC4\x07!\x02\x02\xC4#\x03\x02\x02\x02\xC5\xC6\x07" +
		"\x10\x02\x02\xC6\xC7\x07\x19\x02\x02\xC7\xC8\x07\x1A\x02\x02\xC8\xCF\x07" +
		"!\x02\x02\xC9\xCA\x07\x10\x02\x02\xCA\xCB\x07\x19\x02\x02\xCB\xCC\x07" +
		"2\x02\x02\xCC\xCD\x07\x1A\x02\x02\xCD\xCF\x07!\x02\x02\xCE\xC5\x03\x02" +
		"\x02\x02\xCE\xC9\x03\x02\x02\x02\xCF%\x03\x02\x02\x02\xD0\xD1\x07\x14" +
		"\x02\x02\xD1\xD2\x07\x19\x02\x02\xD2\xD3\x071\x02\x02\xD3\xD4\x07\x1A" +
		"\x02\x02\xD4\xEA\x07!\x02\x02\xD5\xD6\x07\x15\x02\x02\xD6\xD7\x07\x19" +
		"\x02\x02\xD7\xD8\x071\x02\x02\xD8\xD9\x07\x1F\x02\x02\xD9\xDA\x05*\x16" +
		"\x02\xDA\xDB\x07\x1A\x02\x02\xDB\xDC\x07!\x02\x02\xDC\xEA\x03\x02\x02" +
		"\x02\xDD\xDE\x07\x16\x02\x02\xDE\xDF\x07\x19\x02\x02\xDF\xE0\x071\x02" +
		"\x02\xE0\xE1\x07\x18\x02\x02\xE1\xE2\x072\x02\x02\xE2\xE3\x07\x1A\x02" +
		"\x02\xE3\xEA\x07!\x02\x02\xE4\xE5\x07\x17\x02\x02\xE5\xE6\x07\x19\x02" +
		"\x02\xE6\xE7\x072\x02\x02\xE7\xE8\x07\x1A\x02\x02\xE8\xEA\x07!\x02\x02" +
		"\xE9\xD0\x03\x02\x02\x02\xE9\xD5\x03\x02\x02\x02\xE9\xDD\x03\x02\x02\x02" +
		"\xE9\xE4\x03\x02\x02\x02\xEA\'\x03\x02\x02\x02\xEB\xEF\x07\x1B\x02\x02" +
		"\xEC\xEE\x05\x12\n\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02" +
		"\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02" +
		"\xF1\xEF\x03\x02\x02\x02\xF2\xF3\x07\x1C\x02\x02\xF3)\x03\x02\x02\x02" +
		"\xF4\xF5\x05,\x17\x02\xF5+\x03\x02\x02\x02\xF6\xFB\x05.\x18\x02\xF7\xF8" +
		"\x076\x02\x02\xF8\xFA\x05.\x18\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFD\x03" +
		"\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC-\x03" +
		"\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0103\x050\x19\x02\xFF\u0100" +
		"\x077\x02\x02\u0100\u0102\x050\x19\x02\u0101\xFF\x03\x02\x02\x02\u0102" +
		"\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02" +
		"\x02\x02\u0104/\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u010B" +
		"\x052\x1A\x02\u0107\u0108\t\x03\x02\x02\u0108\u010A\x052\x1A\x02\u0109" +
		"\u0107\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02" +
		"\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C1\x03\x02\x02\x02\u010D\u010B" +
		"\x03\x02\x02\x02\u010E\u0113\x054\x1B\x02\u010F\u0110\t\x04\x02\x02\u0110" +
		"\u0112\x054\x1B\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0115\x03\x02\x02" +
		"\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u01143\x03" +
		"\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116\u011B\x056\x1C\x02\u0117" +
		"\u0118\t\x05\x02\x02\u0118\u011A\x056\x1C\x02\u0119\u0117\x03\x02\x02" +
		"\x02\u011A\u011D\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C" +
		"\x03\x02\x02\x02\u011C5\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E" +
		"\u0123\x058\x1D\x02\u011F\u0120\t\x06\x02\x02\u0120\u0122\x058\x1D\x02" +
		"\u0121\u011F\x03\x02\x02\x02\u0122\u0125\x03\x02\x02\x02\u0123\u0121\x03" +
		"\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u01247\x03\x02\x02\x02\u0125" +
		"\u0123\x03\x02\x02\x02\u0126\u0127\t\x07\x02\x02\u0127\u012A\x058\x1D" +
		"\x02\u0128\u012A\x05:\x1E\x02\u0129\u0126\x03\x02\x02\x02\u0129\u0128" +
		"\x03\x02\x02\x02\u012A9\x03\x02\x02\x02\u012B\u0134\x05B\"\x02\u012C\u0134" +
		"\x072\x02\x02\u012D\u012E\x07\x19\x02\x02\u012E\u012F\x05*\x16\x02\u012F" +
		"\u0130\x07\x1A\x02\x02\u0130\u0134\x03\x02\x02\x02\u0131\u0134\x05<\x1F" +
		"\x02\u0132\u0134\x05> \x02\u0133\u012B\x03\x02\x02\x02\u0133\u012C\x03" +
		"\x02\x02\x02\u0133\u012D\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133" +
		"\u0132\x03\x02\x02\x02\u0134;\x03\x02\x02\x02\u0135\u0136\x072\x02\x02" +
		"\u0136\u0138\x07\x19\x02\x02\u0137\u0139\x05@!\x02\u0138\u0137\x03\x02" +
		"\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A" +
		"\u013B\x07\x1A\x02\x02\u013B=\x03\x02\x02\x02\u013C\u013E\x07\x1D\x02" +
		"\x02\u013D\u013F\x05@!\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03" +
		"\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x07\x1E\x02\x02\u0141" +
		"?\x03\x02\x02\x02\u0142\u0147\x05*\x16\x02\u0143\u0144\x07\x1F\x02\x02" +
		"\u0144\u0146\x05*\x16\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0149\x03" +
		"\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
		"A\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014B\t\b\x02\x02" +
		"\u014BC\x03\x02\x02\x02\x1EFHOW_ktz\x88\x9B\xA6\xAA\xAE\xB8\xCE\xE9\xEF" +
		"\xFB\u0103\u010B\u0113\u011B\u0123\u0129\u0133\u0138\u013E\u0147";
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
	public topLevelDecl(): TopLevelDeclContext[];
	public topLevelDecl(i: number): TopLevelDeclContext;
	public topLevelDecl(i?: number): TopLevelDeclContext | TopLevelDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDeclContext);
		} else {
			return this.getRuleContext(i, TopLevelDeclContext);
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


export class TopLevelDeclContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public functionDecl(): FunctionDeclContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_topLevelDecl; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterTopLevelDecl) {
			listener.enterTopLevelDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitTopLevelDecl) {
			listener.exitTopLevelDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitTopLevelDecl) {
			return visitor.visitTopLevelDecl(this);
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


export class TypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext {
		return this.getRuleContext(0, BaseTypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.QUESTION, 0); }
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
	public fileStmts(): FileStmtsContext | undefined {
		return this.tryGetRuleContext(0, FileStmtsContext);
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
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
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


export class ForInitContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.SET, 0); }
	public IDENT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.IDENT, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_forInit; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(RedLangParser.SET, 0); }
	public IDENT(): TerminalNode { return this.getToken(RedLangParser.IDENT, 0); }
	public EQUAL(): TerminalNode { return this.getToken(RedLangParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
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


export class FileStmtsContext extends ParserRuleContext {
	public READFILE(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.READFILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RedLangParser.LPAREN, 0); }
	public STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.STRING_LIT, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RedLangParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(RedLangParser.SEMI, 0); }
	public WRITEFILE(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.WRITEFILE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.COMMA, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.OPEN, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.AS, 0); }
	public IDENT(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.IDENT, 0); }
	public CLOSE(): TerminalNode | undefined { return this.tryGetToken(RedLangParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedLangParser.RULE_fileStmts; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterFileStmts) {
			listener.enterFileStmts(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitFileStmts) {
			listener.exitFileStmts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitFileStmts) {
			return visitor.visitFileStmts(this);
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
	public additive(): AdditiveContext[];
	public additive(i: number): AdditiveContext;
	public additive(i?: number): AdditiveContext | AdditiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveContext);
		} else {
			return this.getRuleContext(i, AdditiveContext);
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


export class AdditiveContext extends ParserRuleContext {
	public multiplicative(): MultiplicativeContext[];
	public multiplicative(i: number): MultiplicativeContext;
	public multiplicative(i?: number): MultiplicativeContext | MultiplicativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeContext);
		} else {
			return this.getRuleContext(i, MultiplicativeContext);
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
	public get ruleIndex(): number { return RedLangParser.RULE_additive; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterAdditive) {
			listener.enterAdditive(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitAdditive) {
			listener.exitAdditive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitAdditive) {
			return visitor.visitAdditive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return RedLangParser.RULE_multiplicative; }
	// @Override
	public enterRule(listener: RedLangListener): void {
		if (listener.enterMultiplicative) {
			listener.enterMultiplicative(this);
		}
	}
	// @Override
	public exitRule(listener: RedLangListener): void {
		if (listener.exitMultiplicative) {
			listener.exitMultiplicative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedLangVisitor<Result>): Result {
		if (visitor.visitMultiplicative) {
			return visitor.visitMultiplicative(this);
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


