import {
  SET,
  SET_SURVEY,
} from '../Types/Survey'
import { uniqueId } from 'lodash'
import { normalize as normalizr } from '../Schemas/Survey'
import { initialValue as pageInitialValue } from '../Actions/Page'

export const initialValue = () => {
  const surveyId = uniqueId()
  return {
    id: surveyId,
    title: 'Questionnaire',
    description: 'Description',
    responseTime: '',
    active: false,
    dates: [],
    password: '',
    link: '',
    pages: [
      {
        id: uniqueId(),
        surveyId,
        ...pageInitialValue(),
      }
    ],
  }
}

// Action Creators
export const set = (value) => ({
  type: SET,
  payload: {
    value: normalizr(value),
  }
})

export const reset = () => ({
  type: SET,
  payload: {
    value: normalizr(initialValue())
  }
})

export const setSurvey = (id, value) => ({
  type: SET_SURVEY,
  payload: {
    id,
    ...value,
  }
})
