import { createSelector } from 'reselect'
import { questions as editorQuestions, } from '../Selectors/Question'
import { getOrderedPages } from './Page'

// Input Selectors
const id = (state, props) => props.id

const value = (state, props) => props.value

const questions = (state) => state.controller.questions

// Selectors
export const getControllerQuestion = createSelector(
  [questions, id],
  (questions, id) => questions[id] || {}
)

export const getPreviousQuestionsMapFromPage = createSelector(
  [value, getOrderedPages, editorQuestions],
  (value, pages, questions) => {
    const pagesValues = Object.values(pages)
    return pagesValues
      .slice(0, pagesValues.findIndex(e => e.id === value.id))
      .reduce((a, p) => ({
        ...a,
        ...p.questions.reduce((b, q) => ({ ...b, [q]: questions[q] }), {})
      }), {})
  }
)

export const getPreviousQuestionsMapFromQuestion = createSelector(
  [value, getOrderedPages, editorQuestions],
  (value, pages, questions) => {
    const pagesValues = Object.values(pages)
    return pagesValues
      .slice(0, pagesValues.findIndex(e => e.id === value.pageId) + 1)
      .reduce((a, p) => ({
        ...a,
        ...(p.id === value.pageId ? p.questions.slice(0, p.questions.indexOf(value.id)) : p.questions)
          .reduce((b, q) => ({ ...b, [q]: questions[q] }), {})
      }), {})
  }
)