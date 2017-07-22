// @flow

type Schema = string

export type CharacterKind = 'v' | 'c'

export type Rule = {
  character?: string,
  schema?: Schema,
  sequense?: Rule[],
  reference?: [CharacterKind, number],
  union?: [Rule, Rule],
  difference?: [Rule, Rule],
  probability? : number,
} | Rule[]

export const VOWELS : Rule = [
  { character: 'a', probability: 1 },
  { character: 'i', probability: 1 },
  { character: 'u', probability: 1 },
];

export const CONSONANTS : Rule = [
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

export const DEKUGA : Rule = [
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
      { schema: 'v{c - ʻ}' },
      [{ schema: 'c1', probability: 1 }, { schema: '{c - c1}', probability: 1 }],
      [{ schema: 'v1', probability: 2 }, { schema: '{v - v1}', probability: 1 }],
    ],
    probability: 2,
  },
  { schema: 'cv', probability: 1 },
  { schema: 'vc', probability: 1 },
];
