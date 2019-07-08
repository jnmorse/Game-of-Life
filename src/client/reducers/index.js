import { combineReducers } from 'redux';
import golReducer from './gol-reducer';
import controlsReducer from './controls-reducer';

export default combineReducers({
  gol: golReducer,
  controls: controlsReducer
});
