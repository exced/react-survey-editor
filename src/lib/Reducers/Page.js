import Immutable from 'seamless-immutable'
import {
  ADD_PAGE,
  REMOVE_PAGE,
  SET_PAGE,
} from '../Types/Page'
import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  MOVE_QUESTION,
} from '../Types/Question'
import {
  SET,
} from '../Types/Survey'


const initialState = Immutable({})

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET:
      return action.payload.value.entities.pages || initialState

    case ADD_PAGE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      }

    case REMOVE_PAGE: {
      const { [action.payload.id]: item, ...rest } = state
      return {
        ...rest,
      }
    }

    case SET_PAGE: {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload
        }
      }
    }

    case ADD_QUESTION:
      return {
        ...state,
        [action.payload.pageId]: {
          ...state[action.payload.pageId],
          questions: [
            ...state[action.payload.pageId].questions,
            action.payload.id
          ]
        }
      }

    case REMOVE_QUESTION:
      return {
        ...state,
        [action.payload.pageId]: {
          ...state[action.payload.pageId],
          questions: state[action.payload.pageId].questions.filter(e => e !== action.payload.id)
        }
      }

    case MOVE_QUESTION:
      return {
        ...state,
        [action.payload.pageId]: {
          ...state[action.payload.pageId],
          questions: action.payload.data
        }
      }

    default:
      return state
  }
}

export default reducer