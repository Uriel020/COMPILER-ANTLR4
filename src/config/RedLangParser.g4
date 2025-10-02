parser grammar RedLangParser;

options { tokenVocab=RedLangLexer; }

program
    : statement* EOF
    ;

declaration
    : DECLARE IDENT COLON type (EQUAL expression)? SEMI
    ;

type
    : BASETYPE QUESTION?
    | ARRAY LBRACK type RBRACK
    ;

literal
    : INT_LIT
    | FLOAT_LIT
    | STRING_LIT
    | TRUE
    | FALSE
    | NULL
    ;

arguments
    : expression (COMMA expression)*
    ;

callExpr
    : IDENT LPAREN arguments? RPAREN
    ;

primary
    : literal
    | IDENT
    | LPAREN expression RPAREN
    | callExpr
    | arrayAccess
    ;

unary
    : (MINUS | NOT) unary
    | primary
    ;

factor
    : unary ((STAR | SLASH | PERCENT) unary)*
    ;

term
    : left=factor (op=(PLUS | MINUS) right=factor)*
    ;

comparison
    : left=term (op=(GT | LT | GTEQ | LTEQ) right=term)*
    ;

equality
    : left=comparison (op=(EQEQ | NOTEQ) right=comparison)*
    ;

logicAnd
    : left=equality (op=AND right=equality)*
    ;

logicOr
    : left=logicAnd (op=OR right=logicAnd)*
    ;

expression
    : logicOr
    ;

readStmt
    : ASK LPAREN IDENT RPAREN SEMI
    ;

printStmt
    : SHOW LPAREN expression RPAREN SEMI
    ;

assignment
    : SET IDENT EQUAL expression SEMI
    ;

forStmt
    : LOOP LPAREN (declaration | assignment)? expression? SEMI assignment? RPAREN block
    ;

whileStmt
    : REPEAT LPAREN expression RPAREN block
    ;

ifStmt
    : CHECK LPAREN expression RPAREN block (OTHERWISE block)?
    ;

block
    : LBRACE statement* RBRACE
    ;

statement
    : block
    | declaration
    | assignment
    | ifStmt
    | whileStmt
    | forStmt
    | returnStmt
    | printStmt
    | readStmt
    | arrayAssignment
    | readFileStmt
    | writeFileStmt
    | openFileStmt
    | closeFileStmt
    ;

returnStmt
    : GIVE expression SEMI
    ;

param
    : IDENT COLON type
    ;

parameters
    : param (COMMA param)*
    ;

functionDecl
    : FUNC IDENT LPAREN parameters? RPAREN COLON type block
    ;

arrayAccess
    : IDENT LBRACK expression RBRACK
    ;

arrayAssignment
    : SET arrayAccess EQUAL expression SEMI
    ;

readFileStmt
    : READFILE LPAREN STRING_LIT RPAREN SEMI
    ;

writeFileStmt
    : WRITEFILE LPAREN STRING_LIT COMMA expression RPAREN SEMI
    ;

openFileStmt
    : OPEN LPAREN STRING_LIT AS IDENT RPAREN SEMI
    ;

closeFileStmt
    : CLOSE LPAREN IDENT RPAREN SEMI
    ;
