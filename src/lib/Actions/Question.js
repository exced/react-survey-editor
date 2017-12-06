import { uniqueId } from 'lodash'
import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  SET_QUESTION,
  MOVE_QUESTION,
  QUESTION_TEXT,
  QUESTION_TEXT_AREA,
  QUESTION_RATE,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
  QUESTION_CASCADE,
} from '../Types/Question'

// Initial Values
const initialValue = (type) => ({
  [QUESTION_TEXT]: {
    type: QUESTION_TEXT,
    title: 'Question texte court',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
    size: 'small',
  },
  [QUESTION_TEXT_AREA]: {
    type: QUESTION_TEXT_AREA,
    title: 'Question texte long',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
  },
  [QUESTION_RATE]: {
    type: QUESTION_RATE,
    title: 'Question note',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
  },
  [QUESTION_DATE]: {
    type: QUESTION_DATE,
    title: 'Question date',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
    dateType: 'date',
    min: null,
    max: null,
  },
  [QUESTION_DISCRETE_SCALE]: {
    type: QUESTION_DISCRETE_SCALE,
    title: 'Question échelle discrète',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
    min: 0,
    max: 100,
    step: 1,
  },
  [QUESTION_NUMERICAL_SCALE]: {
    type: QUESTION_NUMERICAL_SCALE,
    title: 'Question échelle numérique',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
    min: 0,
    max: 100,
    step: 1,
  },
  [QUESTION_CHOICES]: {
    type: QUESTION_CHOICES,
    title: 'Question choix multiples',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
    choices: [],
    max: 1,
  },
  [QUESTION_IMAGE]: {
    type: QUESTION_IMAGE,
    title: 'Question Image',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
    maxSize: 10000,
  },
  [QUESTION_RANK]: {
    type: QUESTION_RANK,
    title: 'Question rang',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
    choices: []
  },
  [QUESTION_CASCADE]: {
    type: QUESTION_CASCADE,
    title: 'Question cascade',
    mandatory: false,
    visibleIf: `true`,
    tooltip: '',
    options: []
  },
})[type]

// Action Creators
export const addQuestion = (pageId, type) => ({
  type: ADD_QUESTION,
  payload: {
    id: uniqueId(),
    pageId,
    ...initialValue(type),
  }
})

export const setQuestion = (id, value) => ({
  type: SET_QUESTION,
  payload: {
    id,
    ...value,
  }
})

export const resetQuestion = (id, type) => ({
  type: SET_QUESTION,
  payload: {
    id,
    ...initialValue(type)
  }
})

export const removeQuestion = (pageId, id) => ({
  type: REMOVE_QUESTION,
  payload: {
    pageId,
    id,
  }
})

export const moveQuestion = (pageId, data) => ({
  type: MOVE_QUESTION,
  payload: {
    pageId,
    data,
  }
})
