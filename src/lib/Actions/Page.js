import { uniqueId } from 'lodash'
import {
  ADD_PAGE,
  REMOVE_PAGE,
  SET_PAGE,
  MOVE_PAGE,
} from '../Types/Page'

// Action Creators
export const addPage = (surveyId) => ({
  type: ADD_PAGE,
  payload: {
    id: uniqueId(),
    surveyId,
    title: 'Page',
    enabledIf: `true`,
    questions: [],
  }
})

export const setPage = (id, value) => ({
  type: SET_PAGE,
  payload: {
    id,
    ...value,
  }
})

export const removePage = (surveyId, id) => ({
  type: REMOVE_PAGE,
  payload: {
    surveyId,
    id,
  }
})

export const movePage = (surveyId, data) => ({
  type: MOVE_PAGE,
  payload: {
    surveyId,
    data
  }
})
