import {
  TOGGLE_COLLAPSED_SURVEY,
} from '../Types/ControllerSurvey'

// Action Creators
export const toggleCollapsedSurvey = (id) => ({
  type: TOGGLE_COLLAPSED_SURVEY,
  payload: {
    id,
  }
})
