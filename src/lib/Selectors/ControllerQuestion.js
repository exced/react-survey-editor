import { createSelector } from 'reselect'

// Input Selectors
const id = (state, props) => props.id

const questions = (state) => state.controller.questions

const data = (state, props) => props.data

// Selectors
export const getQuestionValues = createSelector(
  [questions],
  (questions) => Object.values(questions)
)

export const getControllerQuestion = createSelector(
  [questions, id],
  (questions, id) => questions[id] || {}
)

export const getVisibleIfQuestion = createSelector(
  [getQuestionValues],
  (questions) => questions && questions.find(e => e.visibleIf)
)

export const getVisibleIfQuestions = createSelector(
  [data, getVisibleIfQuestion],
  (data, question) => question ? data.splice(0, data.indexOf(question.pageId) + 1) : data
)

export const getVisibleIfMode = createSelector(
  [getVisibleIfQuestion],
  (question) => question
)