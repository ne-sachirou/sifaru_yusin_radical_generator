
import { fromJS } from 'immutable';
import sifaruDekuReducer from '../reducer';

describe('sifaruDekuReducer', () => {
  it('returns the initial state', () => {
    expect(sifaruDekuReducer(undefined, {})).toEqual(fromJS({}));
  });
});
