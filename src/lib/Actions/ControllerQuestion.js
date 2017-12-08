import {
  TOGGLE_VISIBLE_IF_QUESTION,
} from '../Types/ControllerQuestion'

// Action Creators
export const toggleVisibleIfQuestion = (id) => ({
  type: TOGGLE_VISIBLE_IF_QUESTION,
  payload: {
    id,
  }
})
