import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Reducer as editor } from '../lib'

const rootReducer = combineReducers({
  editor
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

export default createStore(rootReducer, initialState, composedEnhancers)


