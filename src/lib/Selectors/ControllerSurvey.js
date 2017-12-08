import { createSelector } from 'reselect'
import { result } from '../Selectors/Normalizr'

// Input Selectors
const survey = (state) => state.controller.survey

// Selectors
export const getControllerSurvey = createSelector(
    [result, survey],
    (result, survey) => survey[result] || {}
)
