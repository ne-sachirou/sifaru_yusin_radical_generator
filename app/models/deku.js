// @flow

import { parse as parseDekuSchema } from './deku_schema';

type Schema = string

type CharacterKind = 'v' | 'c'

type Rule = {
  character?: string,
  schema?: Schema,
  sequense?: Rule[],
  reference?: [CharacterKind, number],
  union?: [Rule, Rule],
  difference?: [Rule, Rule],
  probability? : number,
} | Rule[]

type Dekuable = Character | CharacterSet | Deku

const VOWELS : Rule = [
  { character: 'a', probability: 1 },
  { character: 'i', probability: 1 },
  { character: 'u', probability: 1 },
];

const CONSONANTS : Rule = [
  { character: 'F', probability: 3 },
  { character: 'P', probability: 1 },
  { character: 'B', probability: 1 },
  { character: 'M', probability: 3 },
  { character: 'S', probability: 3 },
  { character: 'Z', probability: 2 },
  { character: 'T', probability: 3 },
  { character: 'D', probability: 3 },
  { character: 'N', probability: 5 },
  { character: 'X', probability: 1 },
  { character: 'J', probability: 1 },
  { character: 'C', probability: 1 },
  { character: 'R', probability: 5 },
  { character: 'K', probability: 3 },
  { character: 'G', probability: 2 },
  { character: 'H', probability: 3 },
  { character: 'ʻ', probability: 3 },
];

const DEKUS : Rule = [
  {
    sequense: [
      { schema: 'cv' },
      [{ schema: 'v1', probability: 2 }, { schema: '{v - v1}', probability: 1 }],
      [{ schema: 'c1', probability: 1 }, { schema: '{c - c1}', probability: 1 }],
    ],
    probability: 2,
  },
  {
    sequense: [
      { schema: 'cv' },
      [{ schema: 'c1', probability: 1 }, { schema: '{c - c1}', probability: 1 }],
      [{ schema: 'v1', probability: 2 }, { schema: '{v - v1}', probability: 1 }],
    ],
    probability: 2,
  },
  {
    sequense: [
      { schema: 'vc' },
      [{ schema: 'v1', probability: 2 }, { schema: '{v - v1}', probability: 1 }],
      [{ schema: 'c1', probability: 1 }, { schema: '{c - c1}', probability: 1 }],
    ],
    probability: 2,
  },
  {
    sequense: [
      { schema: 'v' },
      { schema: '{c - ʻ}' },
      [{ schema: 'c1', probability: 1 }, { schema: '{c - c1}', probability: 1 }],
      [{ schema: 'v1', probability: 2 }, { schema: '{v - v1}', probability: 1 }],
    ],
    probability: 2,
  },
  { schema: 'cv', probability: 1 },
  { schema: 'vc', probability: 1 },
];

function choice<T : {probability?: number}>(items : T[]) : T {
  const full = items.reduce((sum, item) => sum + (item && item.probability), 0);
  if (isNaN(full)) return items[Math.floor(Math.random() * items.length)];
  const gauge = Math.random() * full;
  for (let i = 0, iz = items.length, meter = 0; i < iz; i += 1) {
    meter += items[i].probability;
    if (meter > gauge) return items[i];
  }
  throw new Error(`Choice has bug: ${items.join()}`);
}

function setOfCharacters(rule : Rule, deku : Deku) : CharacterSet {
  if (Array.isArray(rule)) return rule.map((subRule) => setOfCharacters(subRule, deku)).reduce((set, character) => set.union(character));
  if (rule.character) return new CharacterSet([new Character(rule.character, rule.probability)]);
  if (rule.schema) return setOfCharacters(expressDekuSchemaToDekuRule(parseDekuSchema(rule.schema)), deku);
  if (rule.reference) return new CharacterSet([deku.reference(rule.reference[0], rule.reference[1])]);
  if (rule.union) return setOfCharacters(rule.union[0], deku).union(setOfCharacters(rule.union[1], deku));
  if (rule.difference) return setOfCharacters(rule.difference[0], deku).difference(setOfCharacters(rule.difference[1], deku));
  throw new Error(`Unknown setOf rule: ${rule.toString()}`);
}

function kekuriaDeku(rule : Rule, deku : Deku) : Dekuable {
  if (Array.isArray(rule)) return kekuriaDeku(choice(rule), deku);
  if (rule.character) return new Character(rule.character, rule.probability);
  if (rule.schema) return kekuriaDeku(expressDekuSchemaToDekuRule(parseDekuSchema(rule.schema)), deku);
  if (rule.sequense) return rule.sequense.reduce((rdcl, subRule) => rdcl.concat(kekuriaDeku(subRule, rdcl)), deku);
  if (rule.reference) return deku.reference(rule.reference[0], rule.reference[1]);
  if (rule.union) return setOfCharacters(rule.union[0], deku).union(setOfCharacters(rule.union[1], deku));
  if (rule.difference) return setOfCharacters(rule.difference[0], deku).difference(setOfCharacters(rule.difference[1], deku));
  throw new Error(`Unknown kekuria rule: ${rule.toString()}`);
}

function expressDekuSchemaToDekuRule(schema : Schema) : Rule {
  if (Array.isArray(schema[0])) {
    if (schema.length === 1) return expressDekuSchemaToDekuRule(schema[0]);
    return { sequense: schema.map((subSchema) => expressDekuSchemaToDekuRule(subSchema)) };
  }
  switch (schema[0]) {
    case 'Char': return { character: schema[1] };
    case 'Sign v': return VOWELS;
    case 'Sign c': return CONSONANTS;
    case 'Ref v': return { reference: ['v', parseInt(schema[1], 10)] };
    case 'Ref c': return { reference: ['c', parseInt(schema[1], 10)] };
    case '+': return { union: [expressDekuSchemaToDekuRule(schema[1]), expressDekuSchemaToDekuRule(schema[2])] };
    case '-': return { difference: [expressDekuSchemaToDekuRule(schema[1]), expressDekuSchemaToDekuRule(schema[2])] };
    default: throw new Error(`Unknown schema: ${schema.toString()}`);
  }
}

class Character {
  character : string
  kind : CharacterKind
  probability: number

  constructor(character : string, probability : number = 0) {
    this.character = character;
    this.probability = probability;
    if (VOWELS.some((rule) => rule.character === character)) {
      this.kind = 'v';
    } else if (CONSONANTS.some((rule) => rule.character === character)) {
      this.kind = 'c';
    } else {
      throw new Error(`Unknown character: ${character}`);
    }
  }

  toDeku() : Deku { return new Deku([this]); }
}

class CharacterSet {
  characters : Character[]

  constructor(characters : Character[]) {
    this.characters = characters;
    this.uniq();
  }

  union(set : CharacterSet) : CharacterSet {
    this.characters = this.characters.concat(set.characters);
    this.uniq();
    return this;
  }

  difference(set : CharacterSet) : CharacterSet {
    const characters = set.characters.map((character) => character.character);
    this.characters = this.characters.filter((character) => !characters.includes(character.character));
    return this;
  }

  toDeku() : Deku {
    if (this.characters.length === 0) throw Error('Character set is empty.');
    return this.characters[Math.floor(Math.random() * this.characters.length)].toDeku();
  }

  uniq() : CharacterSet {
    const obj = {};
    this.characters = this.characters.reduce((characters, character) => {
      if (!obj[character.character]) {
        obj[character.character] = true;
        characters.push(character);
      }
      return characters;
    }, []);
    return this;
  }
}

/**
 * 語根
 */
export class Deku {
  characters : Character[]

  constructor(characters : Character[]) { this.characters = characters; }

  concat(tail : Dekuable) : Deku {
    this.characters = this.characters.concat(tail.toDeku().characters);
    return this;
  }

  reference(kind : CharacterKind, number : number) { return this.characters.filter((ch) => ch.kind === kind)[number - 1]; }

  toDeku() : Deku { return this; }

  toString() : string { return this.characters.map((ch) => ch.character).join(''); }
}

/**
 * 語根を生成する
 */
Deku.kekuria = function () : Deku { return kekuriaDeku(DEKUS, new Deku([])).toDeku(); };

window.Deku = Deku;
