import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../modules/counter';
import auth from '../modules/auth';

export default combineReducers({
  routing: routerReducer,
  [counter.constants.NAME]: counter.reducers,
  [auth.constants.NAME]: auth.reducers
})