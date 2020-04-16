grammar DekuRule;

root
    : wordDefinition *
    ;

choiceWord
    : (sequenceWord PositiveInteger OrOperator) + sequenceWord PositiveInteger
    ;

differenceOperand
    : OpenParenthesis choiceWord CloseParenthesis
    | String
    | WordName
    | referenceWord
    ;

differenceWord
    : differenceOperand DifferenceOperator differenceOperand
    ;

elementWord
    : OpenParenthesis word CloseParenthesis
    | WordName
    | String
    | referenceWord
    ;

wordDefinition
    : WordName DefineOperator word DefinitionTerminator
    ;

referenceWord
    : ReferenceCall OpenArguments word PositiveInteger CloseArguments
    ;

sequenceWord
    : elementWord +
    ;

word
    : choiceWord
    | differenceWord
    | elementWord
    | sequenceWord
    ;

CloseArguments : ')' ;
CloseParenthesis : '}' ;
DefineOperator : '=' ;
DefinitionTerminator : ';' ;
DifferenceOperator : '-' ;
OpenArguments : '(' ;
OpenParenthesis : '{' ;
OrOperator : '|' ;
PositiveInteger : ('0' | [1-9][0-9]*) ;
ReferenceCall : 'ref' ;
String : '"' ('\\"'|~'"')* '"' ;
WhiteSpace : [ \t\r\n]+ -> skip ;
WordName : [A-Z][0-9A-Za-z]* ;
