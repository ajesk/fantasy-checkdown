import { combineReducers } from 'redux';
import players from './players';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  players,
  visibilityFilter
});