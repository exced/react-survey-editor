import { uniqueId } from 'lodash'
import {
  ADD_PAGE,
  REMOVE_PAGE,
  SET_PAGE,
  RESET_PAGE,
  MOVE_PAGE,
} from '../Types/Page'

// Action Creators
export const addPage = () => ({
  type: ADD_PAGE,
  payload: {
    id: uniqueId(),
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

export const removePage = (id) => ({
  type: REMOVE_PAGE,
  payload: {
    id,
  }
})

export const movePage = (oldId, newId) => ({
  type: MOVE_PAGE,
  payload: {
    oldId,
    newId,
  }
})
