import Immutable from 'seamless-immutable'
import {
  TOGGLE_VISIBLE_IF_QUESTION,
  TOGGLE_COLLAPSED_QUESTION,
} from '../Types/ControllerQuestion'
import {
  ADD_QUESTION,
  REMOVE_QUESTION,
} from '../Types/Question'

const initialState = Immutable({})

const initialValue = Immutable({
  visibleIf: false,
  collapsed: false,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_VISIBLE_IF_QUESTION:
      return {
        ...state,
      }

    case TOGGLE_COLLAPSED_QUESTION:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          collapsed: !state[action.payload.id].collapsed,
        }
      }

    case ADD_QUESTION:
      return {
        ...state,
        [action.payload.id]: initialValue,
      }

    case REMOVE_QUESTION: {
      const { [action.payload.id]: item, ...rest } = state
      return {
        ...rest
      }
    }

    default:
      return state
  }
}

export default reducer