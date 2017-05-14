import { createSelector } from 'reselect';

/**
 * Direct selector to the singleRadical state domain
 */
const selectSingleRadicalDomain = () => (state) => state.get('singleRadical');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SingleRadical
 */

const makeSelectSingleRadical = () => createSelector(
  selectSingleRadicalDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSingleRadical;
export {
  selectSingleRadicalDomain,
};
