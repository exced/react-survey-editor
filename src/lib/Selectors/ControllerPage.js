import { createSelector } from 'reselect'

// Input Selectors
const id = (state, props) => props.id

const pages = (state, props) => state.controller.pages

// Selectors
export const getControllerPage = createSelector(
  [pages, id],
  (pages, id) => pages[id] || {}
)
