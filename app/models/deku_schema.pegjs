// ./node_modules/.bin/pegjs -o app/models/deku_schema.js app/models/deku_schema.pegjs

{
  const rules = require('./deku_rules');

  function expressSchemaToRule(schema) {
    if (Array.isArray(schema[0])) {
      if (schema.length === 1) return expressSchemaToRule(schema[0]);
      return { sequense: schema.map((subSchema) => expressSchemaToRule(subSchema)) };
    }
    switch (schema[0]) {
      case 'Char': return { character: schema[1] };
      case 'Sign v': return rules.VOWELS;
      case 'Sign c': return rules.CONSONANTS;
      case 'Ref v': return { reference: ['v', parseInt(schema[1], 10)] };
      case 'Ref c': return { reference: ['c', parseInt(schema[1], 10)] };
      case '+': return { union: [expressSchemaToRule(schema[1]), expressSchemaToRule(schema[2])] };
      case '-': return { difference: [expressSchemaToRule(schema[1]), expressSchemaToRule(schema[2])] };
      default: throw new Error(`Unknown schema: ${schema.toString()}`);
    }
  }
}

start
  = schema:Term { return expressSchemaToRule(schema); }

Term
  = head:TermOp1 tail:TermOp1* { return [head].concat(tail); }

TermOp1
  = head:Term0 tail:(_ [-+] _ Term0)* {
    return tail.reduce((result, element) => [element[1], result, element[3]], head);
  }

Term0
  = Reference
  / Sign
  / Character
  / '{' _ content:Term _ '}' { return content; }

Reference
  = sign:[vc] number:[0-9]+ { return ['Ref ' + sign, parseInt(number, 10)]; }

Sign
  = sign:[vc] { return ['Sign ' + sign]; }

Character
  = character:[aiuFPBMSZTDNXJCRKGHʻ] { return ['Char', character]; }

_ "whitespace"
  = [ \t\n\r]*
