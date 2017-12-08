import {
  TOGGLE_VISIBLE_IF_PAGE,
} from '../Types/ControllerPage'

// Action Creators
export const toggleVisibleIfPage = (id) => ({
  type: TOGGLE_VISIBLE_IF_PAGE,
  payload: {
    id,
  }
})
