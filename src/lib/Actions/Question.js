import { uniqueId } from 'lodash'
import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  SET_QUESTION,
  RESET_QUESTION,
  MOVE_QUESTION,
  QUESTION_TEXT,
  QUESTION_TEXT_AREA,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
} from '../Types/Question'

// Initial Values
const initialValue = (type) => ({
  [QUESTION_TEXT]: {
    type: QUESTION_TEXT,
    title: 'Question texte court',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    size: 'small',
  },
  [QUESTION_TEXT_AREA]: {
    type: QUESTION_TEXT_AREA,
    title: 'Question texte long',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
  },
  [QUESTION_DATE]: {
    type: QUESTION_DATE,
    title: 'Question date',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    dateType: 'date',
    min: null,
    max: null,
  },
  [QUESTION_DISCRETE_SCALE]: {
    type: QUESTION_DISCRETE_SCALE,
    title: 'Question échelle discrète',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    min: 0,
    max: 100,
    step: 1,
  },
  [QUESTION_NUMERICAL_SCALE]: {
    type: QUESTION_NUMERICAL_SCALE,
    title: 'Question échelle numérique',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    min: 0,
    max: 100,
    step: 1,
  },
  [QUESTION_CHOICES]: {
    type: QUESTION_CHOICES,
    title: 'Question choix multiples',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    choices: [],
    max: 1,
  },
  [QUESTION_IMAGE]: {
    type: QUESTION_IMAGE,
    title: 'Question Image',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    maxSize: 10000,
  },
  [QUESTION_RANK]: {
    type: QUESTION_RANK,
    title: 'Question rang',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    choices: []
  }
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

export const removeQuestion = (pageId, id) => ({
  type: REMOVE_QUESTION,
  payload: {
    pageId,
    id,
  }
})

export const moveQuestion = (oldId, newId) => ({
  type: MOVE_QUESTION,
  payload: {
    oldId,
    newId,
  }
})
