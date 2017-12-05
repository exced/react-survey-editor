import undoable from 'redux-undo'
import { combineReducers } from 'redux'
import pages from './Page'
import questions from './Question'
import survey from './Survey'
import result from './Result'

const entities = combineReducers({ pages, questions, survey })

export default {
  editor: combineReducers({ entities, result })
}