import { createSelector } from 'reselect'
import { result } from './Result'

// Input Selectors
export const survey = (state) => state.editor.entities.survey

// Selectors
export const getSurvey = createSelector(
    [result, survey],
    (result, survey) => survey[result] || {}
)