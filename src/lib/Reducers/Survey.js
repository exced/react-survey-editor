import Immutable from 'seamless-immutable'
import {
  SET,
  SET_SURVEY,
} from '../Types/Survey'
import {
  ADD_PAGE,
  REMOVE_PAGE,
} from '../Types/Page'

const initialState = Immutable({})

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case SET:
      return action.payload.value.entities.survey || initialState

    case SET_SURVEY:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload
        }
      }

    case ADD_PAGE:
      return {
        ...state,
        [action.payload.surveyId]: {
          ...state[action.payload.surveyId],
          pages: [
            ...state[action.payload.surveyId].pages,
            action.payload.id,
          ]
        }
      }

    case REMOVE_PAGE:
      return {
        ...state,
        [action.payload.surveyId]: {
          ...state[action.payload.surveyId],
          pages: state[action.payload.surveyId].pages.filter(e => e !== action.payload.id)
        }
      }

    default:
      return state
  }
}

export default reducer
