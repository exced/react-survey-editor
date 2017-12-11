import { createSelector } from 'reselect'
import { questions as editorQuestions, } from '../Selectors/Question'
import { getOrderedPages } from './Page'

// Input Selectors
const id = (state, props) => props.id

const type = (state, props) => props.type

const value = (state, props) => props.value

const questions = (state) => state.controller.questions

// Selectors
export const getControllerQuestion = createSelector(
  [questions, id],
  (questions, id) => questions[id] || {}
)

export const getPreviousQuestionsMapFromPage = createSelector(
  [type, value, getOrderedPages, editorQuestions],
  (type, value, pages, questions) => {
    const pagesValues = Object.values(pages)
    return pagesValues
      .splice(0, pagesValues.findIndex(e => e.id === value.id))
      .reduce((a, p) => ({
        ...a,
        ...p.questions.reduce((b, q) => ({ ...b, [q]: questions[q] }), {})
      }), {})
  }
)

export const getPreviousQuestionsMapFromQuestion = createSelector(
  [type, value, getOrderedPages, editorQuestions],
  (type, value, pages, questions) => {
    const pagesValues = Object.values(pages)
    return pagesValues
      .splice(0, pagesValues.findIndex(e => e.id === value.pageId) + 1)
      .reduce((a, p) => ({
        ...a,
        ...(p.id === value.pageId ? p.questions.splice(0, p.questions.indexOf(value.id)) : p.questions)
          .reduce((b, q) => ({ ...b, [q]: questions[q] }), {})
      }), {})
  }
)