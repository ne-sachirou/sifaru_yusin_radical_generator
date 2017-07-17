// ./node_modules/.bin/pegjs -o app/models/deku_schema.js app/models/deku_schema.pegjs

{
}

start
  = Term

Term
  = head:TermOp1 tail:TermOp1* { return [head].concat(tail) }

TermOp1
  = head:Term0 tail:(_ [-+] _ Term0)* {
    return tail.reduce((result, element) => [element[1], result, element[3]], head)
  }

Term0
  = Reference
  / Sign
  / Character
  / '{' _ content:Term _ '}' { return content }

Reference
  = sign:[vc] number:[0-9]+ { return ['Ref ' + sign, parseInt(number, 10)] }

Sign
  = sign:[vc] { return ['Sign ' + sign] }

Character
  = character:[aiuFPBMSZTDNXJCRKGHʻ] { return ['Char', character] }

_ "whitespace"
  = [ \t\n\r]*
