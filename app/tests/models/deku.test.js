import { Deku } from '../../models/deku';

describe('.kekuria', () => {
  describe('Dekuを返す', () => {
    for (let i = 0; i < 100; i += 1) {
      expect(Deku.kekuria()).toBeInstanceOf(Deku);
    }
  });
});
