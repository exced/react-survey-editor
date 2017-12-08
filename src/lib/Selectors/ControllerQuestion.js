import { createSelector } from 'reselect'

// Input Selectors
const id = (state, props) => props.id

const questions = (state) => state.controller.questions

// Selectors
export const getControllerQuestion = createSelector(
  [questions, id],
  (questions, id) => questions[id] || {}
)
