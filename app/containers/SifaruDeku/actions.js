/*
 *
 * SifaruDeku actions
 *
 */

import {
  DEFAULT_ACTION,
  KEKURIA_DEKU,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function kekuriaDeku() {
  return {
    type: KEKURIA_DEKU,
  };
}
