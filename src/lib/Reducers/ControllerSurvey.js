import Immutable from 'seamless-immutable'
import {
  SET,
} from '../Types/Survey'
import {
  TOGGLE_COLLAPSED_SURVEY,
} from '../Types/ControllerSurvey'

const initialState = Immutable({})

const initialValue = Immutable({
  visibleIf: false,
  collapsed: false,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET:
      return {
        ...state,
        [action.payload.value.result]: initialValue
      }

    case TOGGLE_COLLAPSED_SURVEY:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          collapsed: !state[action.payload.id].collapsed,
        }
      }

    default:
      return state
  }
}

export default reducer