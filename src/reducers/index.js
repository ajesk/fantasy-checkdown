import { combineReducers } from 'redux';
import players from './players';
import visibilityFilters from './visibilityFilter';
import search from './search';

export default combineReducers({
  players,
  visibilityFilters,
  search
});