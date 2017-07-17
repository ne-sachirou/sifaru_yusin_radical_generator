import { createSelector } from 'reselect';

/**
 * Direct selector to the sifaruDeku state domain
 */
const selectSifaruDekuDomain = () => (state) => state.get('sifaruDeku');

/**
 * Other specific selectors
 */

const makeSelectDeku = () => createSelector(
  selectSifaruDekuDomain(),
  (substate) => substate.get('deku')
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
  makeSelectDeku,
};
