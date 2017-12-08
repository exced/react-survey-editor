import { createSelector } from 'reselect'

// Input Selectors
const id = (state, props) => props.id

export const questions = (state) => state.editor.present.entities.questions

export const questionValues = (state) => Object.values(state.editor.present.entities.questions)

export const questionKeys = (state) => Object.keys(state.editor.present.entities.questions)

// Selectors
export const getQuestion = createSelector(
    [questions, id],
    (questions, id) => questions[id]
)

export const getPreviousQuestionValuesFromPage = createSelector(
    [questionValues],
    (questions) => questions
)

export const getPreviousQuestionValues = createSelector(
    [questionValues],
    (questions) => questions
)