import { createSelector } from 'reselect'

// Input Selectors
const id = (state, props) => props.id

export const questions = (state) => state.editor.present.entities.questions

export const getQuestionValues = createSelector(
    [questions],
    (questions) => Object.values(questions)
)


// Selectors
export const getQuestion = createSelector(
    [questions, id],
    (questions, id) => questions[id]
)