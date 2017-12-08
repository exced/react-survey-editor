import { createSelector } from 'reselect'

// Input Selectors
const id = (state, props) => props.id

const pages = (state) => state.controller.pages

// Selectors
export const getPage = createSelector(
  [pages, id],
  (pages, id) => pages[id]
)
