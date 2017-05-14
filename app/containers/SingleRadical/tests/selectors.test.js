import { fromJS } from 'immutable';
import makeSelectSingleRadical from '../selectors';

const selector = makeSelectSingleRadical();

describe('makeSelectSingleRadicalDomain', () => {
  it('should select singleRadical', () => {
    const state = fromJS({});
    const mockedState = fromJS({
      singleRadical: state,
    });
    expect(selector(mockedState)).toEqual(state.toJS());
  });
});
