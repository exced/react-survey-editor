import undoable, { excludeAction } from 'redux-undo'
import { combineReducers } from 'redux'
import pages from './Page'
import { SET } from '../Types/Survey'
import questions from '../Reducers/Question'
import survey from '../Reducers/Survey'
import result from '../Reducers/Result'
import controllerSurvey from '../Reducers/ControllerSurvey'
import controllerPage from '../Reducers/ControllerPage'
import controllerQuestion from '../Reducers/ControllerQuestion'

const entities = combineReducers({ pages, questions, survey })

export default {
  editor: undoable(combineReducers({ entities, result }), {
    limit: 10, // history limit
    filter: excludeAction([SET])
  }),
  controller: combineReducers({ pages: controllerPage, questions: controllerQuestion, survey: controllerSurvey }),
}