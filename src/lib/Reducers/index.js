import undoable, { excludeAction } from 'redux-undo'
import { combineReducers } from 'redux'
import pages from './Page'
import { SET } from '../Types/Survey'
import questions from '../Reducers/Question'
import survey from '../Reducers/Survey'
import result from '../Reducers/Result'

const entities = combineReducers({ pages, questions, survey })

export default {
  editor: undoable(combineReducers({ entities, result }), {
    limit: 10, // history limit
    filter: excludeAction([SET])
  })
}