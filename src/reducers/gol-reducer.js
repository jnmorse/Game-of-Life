import * as type from '../actions/types';

export default function golReducer(state = {}, action) {
  switch(action.type) {
  case type.GOL_STEP:
    return action.payload;
  case type.GOL_INIT:
    return action.payload;
  default:
    return state;
  }
}