grammar RedLang;

options {
    language = TypeScript;
}

// -------------------- Parser --------------------
program
    : (declaration | functionDecl | statement)* EOF
    ;

declaration
    : DECLARE IDENT COLON type (EQUAL expression)? SEMI
    ;

assignment
    : SET IDENT EQUAL expression SEMI
    ;

type
    : baseType QUESTION?
    | arrayType
    ;

baseType
    : TYPE_INT
    | TYPE_FLOAT
    | TYPE_STRING
    | TYPE_BOOL
    ;

arrayType
    : baseType LBRACK RBRACK (LBRACK RBRACK)*
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

returnStmt
    : GIVE expression SEMI
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
    ;

block
    : LBRACE statement* RBRACE
    ;

ifStmt
    : CHECK LPAREN expression RPAREN block (OTHERWISE block)?
    ;

whileStmt
    : REPEAT LPAREN expression RPAREN block
    ;

forStmt
    : LOOP LPAREN initStmt? SEMI expression? SEMI assignment? RPAREN block
    ;

initStmt
    : DECLARE IDENT COLON type (EQUAL expression)?
    | SET IDENT EQUAL expression
    ;

printStmt
    : SHOW LPAREN expression RPAREN SEMI
    ;

readStmt
    : ASK LPAREN RPAREN SEMI
    | ASK LPAREN IDENT RPAREN SEMI
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
    : term ((GT | LT | GE | LE) term)*
    ;

term
    : factor ((ADD | SUB) factor)*
    ;

factor
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

// Type keywords (must come before IDENT)
TYPE_INT    : 'i';
TYPE_FLOAT  : 'f';
TYPE_STRING : 's';
TYPE_BOOL   : 'b';

// Logical operators (words, not symbols!)
OR   : 'or';
AND  : 'and';
NOT  : 'not';

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
STRING_LIT : '"' ( ~["\\\r\n] | ESC )* '"' ;

IDENT      : LETTER (LETTER | DIGIT | '_')* ;

// fragments
fragment ESC    : '\\' [nrtbf"\\] ;
fragment DIGIT  : [0-9] ;
fragment LETTER : [A-Za-z] ;

// Whitespace and comments
WS           : [ \t\r\n]+ -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;
COMMENT      : '/*' .*? '*/' -> skip ;