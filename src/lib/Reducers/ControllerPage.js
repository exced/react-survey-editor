import Immutable from 'seamless-immutable'
import {
  TOGGLE_VISIBLE_IF_PAGE,
  TOGGLE_COLLAPSED_PAGE,
} from '../Types/ControllerPage'
import {
  ADD_PAGE,
  REMOVE_PAGE,
} from '../Types/Page'

// Map
const initialState = Immutable({})

const initialValue = Immutable({
  visibleIf: false,
  collapsed: false,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_VISIBLE_IF_PAGE:
      return {
        ...state,
      }

    case TOGGLE_COLLAPSED_PAGE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          collapsed: !state[action.payload.id].collapsed,
        }
      }

    case ADD_PAGE:
      return {
        ...state,
        [action.payload.id]: initialValue,
      }

    case REMOVE_PAGE: {
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