grammar Formulario;

// --- REGLAS SINTÁCTICAS (PARSER) ---
formulario : 'formulario' ID '{' campo* '}' ;
campo      : ID ':' tipo ('=' valor)? ';' ;
tipo       : 'texto' | 'numero' | 'booleano' ;
valor      : CADENA | NUMERO | BOOLEANO ;

// --- REGLAS LÉXICAS (LEXER) ---
BOOLEANO   : 'verdadero' | 'falso' ;
CADENA     : '"' ~'"'* '"' ; 
NUMERO     : [0-9]+ ;
ID         : [a-zA-Z]+ ;

// Ignorar espacios en blanco (Regla crítica)
WS         : [ \t\r\n]+ -> skip ;