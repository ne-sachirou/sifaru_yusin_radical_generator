
import { fromJS } from 'immutable';
import singleRadicalReducer from '../reducer';

describe('singleRadicalReducer', () => {
  it('returns the initial state', () => {
    expect(singleRadicalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
