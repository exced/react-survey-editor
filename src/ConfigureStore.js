import { combineReducers, createStore } from 'redux'
import Reducers from './lib/Reducers'

const rootReducer = combineReducers({
  ...Reducers,
})

export default createStore(rootReducer)

