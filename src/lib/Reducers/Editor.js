import {
  // Actions
  ADD_ITEM,
  REMOVE_ITEM,
  SET_ITEM,
  MOVE_ITEM,
  // Types
  SURVEY,
  PAGE,
  QUESTION_TEXT,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
} from '../Types/Editor'
import { uniqueId } from 'lodash'
import Immutable from 'seamless-immutable'

const initialValue = (type) => {
  switch (type) {

    case PAGE:
      return {
        title: 'Page'
      }

    case QUESTION_TEXT:
      return {
        title: 'Question texte',
        maxLength: 150,
      }

    case QUESTION_DATE:
      return {
        title: 'Question date',
        begin: null,
        end: null,
      }

    case QUESTION_DISCRETE_SCALE:
      return {
        title: 'Question échelle discrète',
        begin: 0,
        end: 100,
        step: 1,
      }
    case QUESTION_NUMERICAL_SCALE:
      return {
        title: 'Question échelle numérique',
        begin: 0,
        end: 100,
        step: 1,
      }

    case QUESTION_CHOICES:
      return {
        title: 'Question choix multiples',
        choices: [],
      }

    case QUESTION_IMAGE:
      return {
        title: 'Question image',
        maxSize: 102400,
      }

    case QUESTION_RANK:
      return {
        title: 'Question rang',
        choices: []
      }

    default:
      return null
  }
}

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
        items: { ...state.items, [id]: { id, type: action.payload.type, parentId: action.payload.parentId, ...initialValue(action.payload.type) } },
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
