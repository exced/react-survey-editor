import {
  TOGGLE_VISIBLE_IF_QUESTION,
  TOGGLE_COLLAPSED_QUESTION,
} from '../Types/ControllerQuestion'

// Action Creators
export const toggleVisibleIfQuestion = (id) => ({
  type: TOGGLE_VISIBLE_IF_QUESTION,
  payload: {
    id,
  }
})

export const toggleCollapsedQuestion = (id) => ({
  type: TOGGLE_COLLAPSED_QUESTION,
  payload: {
    id,
  }
})
