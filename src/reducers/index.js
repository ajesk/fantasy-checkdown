import { combineReducers } from 'redux';
import players from './players';
import visibilityFilters from './visibilityFilter';

export default combineReducers({
  players,
  visibilityFilters
});