import {
  TOGGLE_COLLAPSED_PAGE
} from '../Types/ControllerPage'

// Action Creators
export const toggleCollapsedPage = (id) => ({
  type: TOGGLE_COLLAPSED_PAGE,
  payload: {
    id,
  }
})
