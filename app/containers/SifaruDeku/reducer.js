/*
 *
 * SifaruDeku reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  KEKURIA_DEKU,
} from './constants';
import { Deku } from '../../models/deku';

const initialState = fromJS({});

function sifaruDekuReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case KEKURIA_DEKU:
      return state.set('deku', Deku.kekuria().toString());
    default:
      return state;
  }
}

export default sifaruDekuReducer;
