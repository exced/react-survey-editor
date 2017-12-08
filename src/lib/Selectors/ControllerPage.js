import { createSelector } from 'reselect'
import { getVisibleIfQuestion } from '../Selectors/ControllerQuestion'

// Input Selectors
const id = (state, props) => props.id

const pages = (state, props) => state.controller.pages

const data = (state, props) => props.data

// Selectors
export const getControllerPage = createSelector(
  [pages, id],
  (pages, id) => pages[id] || {}
)

export const getVisibleIfPages = createSelector(
  [data, getVisibleIfQuestion],
  (data, question) => question ? data.splice(0, data.indexOf(question.pageId) + 1) : data
)