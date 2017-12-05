import { createSelector } from 'reselect'
import { createDeepEqualSelector } from '../Selectors'

// Input Selectors
const id = (state, props) => props.id

export const pages = (state) => state.editor.present.entities.pages

export const pageValues = (state) => Object.values(state.editor.present.entities.pages)

export const pageKeys = (state) => Object.keys(state.editor.present.entities.pages)

// Selectors
export const getPages = createSelector(
  [pageValues],
  (pages) => pages || []
)

export const getPageIds = createDeepEqualSelector(
  [pageKeys],
  (ids) => ids || []
)

export const getPage = createSelector(
  [pages, id],
  (pages, id) => pages[id]
)
