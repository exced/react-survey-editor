import Immutable from 'seamless-immutable'
import {
  SET,
  SET_SURVEY,
} from '../Types/Survey'

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

    default:
      return state
  }
}

export default reducer
