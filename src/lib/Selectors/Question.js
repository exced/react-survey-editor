import { createSelector } from 'reselect'
import { createDeepEqualSelector } from '../Selectors'

// Input Selectors
const id = (state, props) => props.id

const pageId = (state, props) => props.pageId

export const questions = (state) => state.editor.entities.questions

export const questionValues = (state) => Object.values(state.editor.entities.questions)

export const questionKeys = (state) => Object.keys(state.editor.entities.questions)

// Selectors
export const getQuestion = createSelector(
    [questionValues, id],
    (questions, id) => questions[id]
)