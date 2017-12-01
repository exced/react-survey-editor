import {
  // Actions
  ADD_ITEM,
  REMOVE_ITEM,
  SET_ITEM,
  MOVE_ITEM,
} from '../Types/Editor'
import { types, values } from '../Models/Editor'
import { uniqueId } from 'lodash'
import Immutable from 'seamless-immutable'

// Normalized state. Item Map. O(1) access
const initialState = Immutable({
  items: {},
})

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_ITEM: {
      const id = uniqueId()
      return {
        ...state,
        items: { ...state.items, [id]: { id, type: action.payload.type, parentId: action.payload.parentId, ...values[action.payload.type] } },
      }
    }

    case REMOVE_ITEM: {
      const { [action.payload.id]: item, ...rest } = state.items
      return {
        ...state,
        items: rest
      }
    }

    case SET_ITEM: {
      return {
        ...state,
        items: { ...state.items, [action.payload.id]: action.payload.value }
      }
    }

    default:
      return state
  }
}

export default reducer
