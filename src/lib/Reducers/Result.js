import Immutable from 'seamless-immutable'
import {
  SET,
} from '../Types/Survey'

const initialState = Immutable({})

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET:
      return action.payload.value.result || initialState

    default:
      return state
  }
}

export default reducer