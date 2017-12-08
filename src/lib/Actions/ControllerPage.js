import {
  TOGGLE_VISIBLE_IF_PAGE,
  TOGGLE_COLLAPSED_PAGE
} from '../Types/ControllerPage'

// Action Creators
export const toggleVisibleIfPage = (id) => ({
  type: TOGGLE_VISIBLE_IF_PAGE,
  payload: {
    id,
  }
})

export const toggleCollapsedPage = (id) => ({
  type: TOGGLE_COLLAPSED_PAGE,
  payload: {
    id,
  }
})
