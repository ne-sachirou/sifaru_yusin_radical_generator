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
      let dekuga = state.get('dekuga', fromJS([]));
      while (true) {
        const deku = Deku.kekuria().toString();
        if (dekuga.contains(deku)) continue;
        dekuga = dekuga.unshift(deku).slice(0, 20);
        break;
      }
      return state.set('dekuga', dekuga);
    default:
      return state;
  }
}

export default sifaruDekuReducer;
