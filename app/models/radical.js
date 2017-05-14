const VOWELS = ['a', 'i', 'u'];
const CONSONANTS = ['F', 'P', 'B', 'M', 'S', 'Z', 'T', 'D', 'N', 'X', 'J', 'C', 'R', 'K', 'G', 'H', 'ʻ'];

class Unit {
  constructor(vowel, consonant, scheme) {
    this.vowel = vowel;
    this.consonant = consonant;
    this.scheme = scheme;
  }

  toString() {
    switch (this.scheme) {
      case 'vc':
        return this.vowel + this.consonant;
      case 'cv':
        return this.consonant + this.vowel;
      default:
        throw new Error(`Unknown schema: ${this.schema}`);
    }
  }
}

Unit.all = function unitAll() {
  const units = [];
  for (let vi = 0, viz = VOWELS.length; vi < viz; vi += 1) {
    for (let ci = 0, ciz = CONSONANTS.length; ci < ciz; ci += 1) {
      units.push(new Unit(VOWELS[vi], CONSONANTS[ci], 'vc'));
      units.push(new Unit(VOWELS[vi], CONSONANTS[ci], 'cv'));
    }
  }
  return units;
};

export class Radical {
  constructor(units) {
    this.units = units;
  }

  toString() {
    return this.units.map((unit) => unit.toString()).join('');
  }
}

Radical.singleAll = function radicalAll() {
  return Unit.all().map((unit) => new Radical([unit]));
};


window.Radical = Radical;
