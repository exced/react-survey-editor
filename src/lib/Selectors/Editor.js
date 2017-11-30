import { createSelector } from 'reselect'
import {
    // Types
    SURVEY,
    PAGE,
    QUESTION_TEXT,
    QUESTION_DATE,
    QUESTION_DISCRETE_SCALE,
    QUESTION_NUMERICAL_SCALE,
    QUESTION_CHOICES,
    QUESTION_IMAGE,
    QUESTION_RANK,
} from '../Types/Editor'

// Input Selectors
const items = (state) => state.editor.items

const questionsOf = (state, parentId) => Object.values(state.editor.items)
    .filter(e => e.parentId === parentId)

// Selectors
export const getPages = createSelector(
    [items],
    (items) => Object.values(items)
        .filter(e => e.type === PAGE)
)

export const getQuestions = createSelector(
    [questionsOf],
    (questions) => questions
)