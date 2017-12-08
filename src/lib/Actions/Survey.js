import {
  SET,
  SET_SURVEY,
} from '../Types/Survey'
import { uniqueId } from 'lodash'
import { normalize as normalizr } from '../Schemas/Survey'

const initialValue = {
  id: uniqueId(),
  title: 'Questionnaire',
  description: 'Description',
  responseTime: '',
  active: false,
  dates: [],
  password: '',
  link: '',
  pages: [],
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
    value: normalizr(initialValue)
  }
})

export const setSurvey = (id, value) => ({
  type: SET_SURVEY,
  payload: {
    id,
    ...value,
  }
})
