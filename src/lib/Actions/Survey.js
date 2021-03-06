import {
  SET,
  SET_SURVEY,
} from '../Types/Survey'
import { normalize as normalizr } from '../Schemas/Survey'



// Action Creators
export const set = (value) => ({
  type: SET,
  payload: {
    value: normalizr(value),
  }
})

export const setSurvey = (id, value) => ({
  type: SET_SURVEY,
  payload: {
    id,
    ...value,
  }
})
