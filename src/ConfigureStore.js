import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import Reducers from './lib/Reducers'
import { __DEV__ } from './Debug'

const rootReducer = combineReducers({
  ...Reducers,
})

const initialState = {}
const enhancers = []
const middlewares = []

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares))

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

// if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore

export default createAppropriateStore(rootReducer, initialState, composedEnhancers)


