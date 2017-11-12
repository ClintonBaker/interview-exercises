import { combineReducers } from 'redux';
import data from './data';
import locations from './locations';

const reducers = combineReducers({
  data,
  locations
});

export default reducers;
