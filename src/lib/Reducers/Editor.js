import {
  SET,
  RESET,
  SET_SURVEY,
  ADD_PAGE,
  REMOVE_PAGE,
  SET_PAGE,
  MOVE_PAGE,
  ADD_QUESTION,
  REMOVE_QUESTION,
  SET_QUESTION,
  RESET_QUESTION,
  MOVE_QUESTION,
} from '../Types/Editor'
import { values } from '../Models/Editor'
import Immutable from 'seamless-immutable'
import undoable from 'redux-undo'

const initialState = Immutable({
  title: 'Nouveau questionnaire',
  pages: [],
})

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET:
      return action.payload.survey

    case RESET:
      return initialState

    case SET_SURVEY:
      return {
        ...state,
        ...action.payload.value,
      }

    case ADD_PAGE: {
      const page = {
        ...values[action.payload.type],
        type: action.payload.type,
        questions: [],
      }
      return {
        ...state,
        pages: [...state.pages, page],
      }
    }

    case REMOVE_PAGE: {
      return {
        ...state,
        pages: state.pages.filter((p, i) => i !== action.payload.pageIndex),
      }
    }

    case SET_PAGE: {
      return {
        ...state,
        pages: state.pages.map((p, i) => (i === action.payload.pageIndex) ?
          {
            ...p,
            ...action.payload.value
          }
          : p)
      }
    }

    case ADD_QUESTION: {
      const question = {
        type: action.payload.type,
        ...values[action.payload.type],
      }
      return {
        ...state,
        pages: state.pages.map((p, i) => (i === action.payload.pageIndex) ?
          {
            ...p,
            questions: [...p.questions, question]
          }
          : p),
      }
    }

    case REMOVE_QUESTION: {
      return {
        ...state,
        pages: state.pages.map((p, i) => (i === action.payload.pageIndex) ?
          {
            ...p,
            questions: p.questions.filter((q, j) => j !== action.payload.questionIndex)
          }
          : p),
      }
    }

    case SET_QUESTION: {
      return {
        ...state,
        pages: state.pages.map((p, i) => (i === action.payload.pageIndex) ?
          {
            ...p,
            questions: p.questions.map((q, j) => (j === action.payload.questionIndex) ?
              {
                ...q,
                ...action.payload.value,
              }
              : q)
          }
          : p),
      }
    }

    default:
      return state
  }
}

export default reducer

  //  undoable(reducer, {
  //   limit: 10 // history limit
  // }),
