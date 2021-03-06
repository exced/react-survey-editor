import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  SET_QUESTION,
  MOVE_QUESTION,
} from '../Types/Question'
import { initialValue } from '../Models/Question'


// Action Creators
export const addQuestion = (pageId, type) => ({
  type: ADD_QUESTION,
  payload: {
    ...initialValue(type),
    pageId,
  }
})

export const setQuestion = (id, value) => ({
  type: SET_QUESTION,
  payload: {
    ...value,
    id,
  }
})

export const resetQuestion = (id, type) => ({
  type: SET_QUESTION,
  payload: {
    ...initialValue(type),
    id,
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
