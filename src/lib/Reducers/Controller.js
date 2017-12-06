import Immutable from 'seamless-immutable'
import {
  VISIBLE_IF_MODE,
} from '../Types/Controller'

const initialState = Immutable({
  visibleIfMode: false,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case VISIBLE_IF_MODE:
      return {
        ...state,
        visibleIfMode: !state.visibleIfMode
      }

    default:
      return state
  }
}

export default reducer