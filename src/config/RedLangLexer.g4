lexer grammar RedLangLexer;

// Palabras reservadas
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

// Operadores lógicos
AND : 'and';
OR  : 'or';
NOT : 'not';

// Operadores y símbolos
COLON    : ':';
EQUAL    : '=';
SEMI     : ';';
QUESTION : '?';
PLUS     : '+';
MINUS    : '-';
STAR     : '*';
SLASH    : '/';
PERCENT  : '%';
GT       : '>';
LT       : '<';
GTEQ     : '>=';
LTEQ     : '<=';
EQEQ     : '==';
NOTEQ    : '!=';
LPAREN   : '(';
RPAREN   : ')';
LBRACE   : '{';
RBRACE   : '}';
LBRACK   : '[';
RBRACK   : ']';
COMMA    : ',';

// Tipos y palabras extra
BASETYPE   : 'i' | 'f' | 's' | 'b';
ARRAY      : 'array';
READFILE   : 'readfile';
WRITEFILE  : 'writefile';
OPEN       : 'open';
CLOSE      : 'close';
AS         : 'as';

// Literales e identificadores
IDENT      : LETTER (LETTER | DIGIT | '_')*;
INT_LIT    : DIGIT+;
FLOAT_LIT  : DIGIT+ '.' DIGIT+;
STRING_LIT : '"' (~["\\\r\n] | ESC)* '"' 
           | '\'' (~['\\\r\n] | ESC)* '\'';

fragment ESC    : '\\' [nrtbf"'\\];
fragment DIGIT  : [0-9];
fragment LETTER : [A-Za-z];

// Espacios y comentarios
WS           : [ \t\r\n]+ -> skip;
COMMENT      : '/*' .*? '*/' -> skip;
LINE_COMMENT : '//' ~[\r\n]* -> skip;
