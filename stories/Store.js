import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Reducers  } from '../lib'

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

export default createStore(rootReducer, initialState, composedEnhancers)


