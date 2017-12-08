import { createSelector } from 'reselect'

// Input Selectors
const id = (state, props) => props.id

export const questions = (state) => state.controller.questions

export const questionValues = (state) => Object.values(state.controller.questions)

export const questionKeys = (state) => Object.keys(state.controller.questions)

// Selectors
export const getQuestion = createSelector(
  [questions, id],
  (questions, id) => questions[id]
)
