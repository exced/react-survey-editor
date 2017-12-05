import {
  SET,
  SET_SURVEY,
} from '../Types/Survey'
import Immutable from 'seamless-immutable'
import { uniqueId } from 'lodash'
import { normalize as normalizr } from '../Schemas/Survey'

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
    value: Immutable(normalizr({
      id: uniqueId(),
      title: 'Questionnaire',
      pages: [{
        id: uniqueId(),
        title: 'Page',
        questions: []
      }]
    }))
  }
})

export const setSurvey = (id, value) => ({
  type: SET_SURVEY,
  payload: {
    id,
    ...value,
  }
})
