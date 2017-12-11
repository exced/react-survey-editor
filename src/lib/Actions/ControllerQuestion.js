import {
  TOGGLE_COLLAPSED_QUESTION,
} from '../Types/ControllerQuestion'

// Action Creators
export const toggleCollapsedQuestion = (id) => ({
  type: TOGGLE_COLLAPSED_QUESTION,
  payload: {
    id,
  }
})
