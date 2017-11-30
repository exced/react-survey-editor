import {
    NEW_SURVEY,
    SET_SURVEY,
    ADD_PAGE,
    REMOVE_PAGE,
    SET_PAGE,
    MOVE_PAGE,
    ADD_QUESTION,
    REMOVE_QUESTION,
    SET_QUESTION,
    MOVE_QUESTION,
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
  import Immutable from 'seamless-immutable'
  
  const initialState = Immutable({
    survey: {
      type: PAGE,
      title: "Nouveau questionnaire",
      image: "",
      pages: [],
    },
  })
  
  const initialValue = (type) => {
    switch (type) {
  
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
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
  
      case NEW_SURVEY: {
        return initialState
      }
  
      case SET_SURVEY: {
        return {
          ...state,
          survey: action.payload.survey,
        }
      }
  
      case ADD_PAGE: {
        const page = {
          type: PAGE,
          title: "Page",
          questions: [],
        }
        return {
          ...state,
          survey: {
            ...state.survey,
            pages: [...state.survey.pages, page],
          }
        }
      }
  
      case REMOVE_PAGE: {
        return {
          ...state,
          survey: {
            ...state.survey,
            pages: state.survey.pages.filter((e, i) => (i !== action.payload.index)),
          }
        }
      }
  
      case SET_PAGE: {
        return {
          ...state,
          survey: {
            ...state.survey,
            pages: state.survey.pages.map((e, i) => (i === action.payload.index) ? action.payload.value : e)
          }
        }
      }
  
      case ADD_QUESTION: {
        const question = {
          type: action.payload.type,
          ...initialValue(action.payload.type),
        }
        return {
          ...state,
          survey: {
            ...state.survey,
            pages: state.survey.pages.map((e, i) => (i === action.payload.pageIndex) ? { ...e, questions: [...e.questions, question] } : e),
          }
        }
      }
  
      case REMOVE_QUESTION: {
        return {
          ...state,
          pages: state.pages.map((e, i) => (i === action.payload.pageIndex) ? { ...e, questions: e.questions.filter((e1, i1) => (i1 !== action.payload.questionIndex)) } : e),
          selected: null,
        }
      }
  
      case SET_QUESTION: {
        return {
          ...state,
          pages: state.pages.map((e, i) => (i === action.payload.pageIndex) ? { ...e, questions: e.questions.map((e1, i1) => (i1 === action.payload.questionIndex) ? action.payload.value : e1) } : e),
        }
      }
  
      default:
        return state
    }
  }
  
  export default reducer
  