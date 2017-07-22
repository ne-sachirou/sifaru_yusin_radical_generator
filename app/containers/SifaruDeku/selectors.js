import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

/**
 * Direct selector to the sifaruDeku state domain
 */
const selectSifaruDekuDomain = () => (state) => state.get('sifaruDeku');

/**
 * Other specific selectors
 */

const makeSelectDekuga = () => createSelector(
  selectSifaruDekuDomain(),
  (substate) => substate.get('dekuga', fromJS([]))
);

/**
 * Default selector used by SifaruDeku
 */

const makeSelectSifaruDeku = () => createSelector(
  selectSifaruDekuDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSifaruDeku;
export {
  selectSifaruDekuDomain,
  makeSelectDekuga,
};
