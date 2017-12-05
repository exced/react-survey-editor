import Immutable from 'seamless-immutable'
import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  SET_QUESTION,
  MOVE_QUESTION,
} from '../Types/Question'
import {
  SET,
} from '../Types/Survey'

const initialState = Immutable({})

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET:
      return action.payload.value.entities.questions || initialState

    case ADD_QUESTION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      }

    case REMOVE_QUESTION: {
      const { [action.payload.id]: item, ...rest } = state
      return {
        ...rest,
      }
    }

    case SET_QUESTION: {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload
        }
      }
    }

    default:
      return state
  }
}

export default reducer