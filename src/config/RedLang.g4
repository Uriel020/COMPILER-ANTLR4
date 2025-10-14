grammar RedLang;

options {
    language = TypeScript;
}

// -------------------- Parser --------------------
program
    : (topLevelDecl | statement)* EOF
    ;

topLevelDecl
    : declaration
    | functionDecl
    ;

declaration
    : DECLARE IDENT COLON type (EQUAL expression)? SEMI
    ;

functionDecl
    : FUNC IDENT LPAREN parameters? RPAREN COLON type block
    ;

parameters
    : param (COMMA param)*
    ;

param
    : IDENT COLON type
    ;

type
    : baseType QUESTION? (LBRACK RBRACK)*
    ;

baseType
    : 'i'  // integer
    | 'f'  // float
    | 's'  // string
    | 'b'  // boolean
    ;

statement
    : block
    | assignment
    | ifStmt
    | whileStmt
    | forStmt
    | returnStmt
    | printStmt
    | readStmt
    | fileStmts
    ;

assignment
    : SET IDENT EQUAL expression SEMI
    ;

returnStmt
    : GIVE expression SEMI
    ;

ifStmt
    : CHECK LPAREN expression RPAREN block (OTHERWISE block)?
    ;

whileStmt
    : REPEAT LPAREN expression RPAREN block
    ;

forStmt
    : LOOP LPAREN forInit? SEMI expression? SEMI forUpdate? RPAREN block
    ;

forInit
    : declaration
    | SET IDENT EQUAL expression
    ;

forUpdate
    : SET IDENT EQUAL expression
    ;

printStmt
    : SHOW LPAREN expression RPAREN SEMI
    ;

readStmt
    : ASK LPAREN RPAREN SEMI
    | ASK LPAREN IDENT RPAREN SEMI    // ask(var) style if you had it
    ;

// basic file statements (optional in your lexer)
fileStmts
    : READFILE LPAREN STRING_LIT RPAREN SEMI
    | WRITEFILE LPAREN STRING_LIT COMMA expression RPAREN SEMI
    | OPEN LPAREN STRING_LIT AS IDENT RPAREN SEMI
    | CLOSE LPAREN IDENT RPAREN SEMI
    ;

// block
block
    : LBRACE statement* RBRACE
    ;

// -------------------- Expressions --------------------
expression
    : logicOr
    ;

logicOr
    : logicAnd (OR logicAnd)*
    ;

logicAnd
    : equality (AND equality)*
    ;

equality
    : comparison ((EQ | NEQ) comparison)*
    ;

comparison
    : additive ((GT | LT | GE | LE) additive)*
    ;

additive
    : multiplicative ((ADD | SUB) multiplicative)*
    ;

multiplicative
    : unary ((MUL | DIV | MOD) unary)*
    ;

unary
    : (SUB | NOT) unary
    | primary
    ;

primary
    : literal
    | IDENT
    | LPAREN expression RPAREN
    | callExpr
    | arrayLiteral
    ;

callExpr
    : IDENT LPAREN arguments? RPAREN
    ;

arrayLiteral
    : LBRACK arguments? RBRACK
    ;

arguments
    : expression (COMMA expression)*
    ;

literal
    : INT_LIT
    | FLOAT_LIT
    | STRING_LIT
    | TRUE
    | FALSE
    | NULL
    ;

// -------------------- Lexer --------------------
// Keywords (must come before IDENT)
DECLARE   : 'declare';
SET       : 'set';
CHECK     : 'check';
OTHERWISE : 'otherwise';
REPEAT    : 'repeat';
LOOP      : 'loop';
FUNC      : 'func';
GIVE      : 'give';
SHOW      : 'show';
ASK       : 'ask';
TRUE      : 'true';
FALSE     : 'false';
NULL      : 'null';

// File ops (optional)
READFILE  : 'readfile';
WRITEFILE : 'writefile';
OPEN      : 'open';
CLOSE     : 'close';
AS        : 'as';

// Symbols
LPAREN    : '(';
RPAREN    : ')';
LBRACE    : '{';
RBRACE    : '}';
LBRACK    : '[';
RBRACK    : ']';
COMMA     : ',';
COLON     : ':';
SEMI      : ';';
QUESTION  : '?';
EQUAL     : '=';
EQ        : '==';
NEQ       : '!=';
GT        : '>';
LT        : '<';
GE        : '>=';
LE        : '<=';
ADD       : '+';
SUB       : '-';
MUL       : '*';
DIV       : '/';
MOD       : '%';

// Literals and identifiers
INT_LIT    : DIGIT+ ;
FLOAT_LIT  : DIGIT+ '.' DIGIT+ ;
STRING_LIT
    : '"' ( ~["\\\r\n] | ESC )* '"'
    | '\'' ( ~['\\\r\n] | ESC )* '\''
    ;

IDENT      : LETTER (LETTER | DIGIT | '_')* ;

// fragments
fragment ESC    : '\\' [nrtbf"\'\\] ;
fragment DIGIT  : [0-9] ;
fragment LETTER : [A-Za-z] ;

// Whitespace and comments
WS           : [ \t\r\n]+ -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;
COMMENT      : '/*' .*? '*/' -> skip ;
