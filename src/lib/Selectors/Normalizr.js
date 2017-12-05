import { createSelector } from 'reselect'

// Input Selectors
export const entities = (state) => state.editor.present.entities

export const result = (state) => state.editor.present.result

// Selectors

export const getEntities = createSelector(
    [entities],
    (entities) => entities || {}
)

export const getResult = createSelector(
    [result],
    (result) => result || {}
)
