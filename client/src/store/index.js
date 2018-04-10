import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './root_reducer';
import rootEpics from './root_epics';
// eslint-disable-next-line
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory()

const epicMiddleware = createEpicMiddleware(rootEpics);

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  applyMiddleware(epicMiddleware),
  ...enhancers
)

const store = createStore(
  rootReducer,  
  initialState,
  composedEnhancers  
);

export default store