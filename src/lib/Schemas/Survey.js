import { schema, normalize as normalizr, denormalize as denormalizr } from 'normalizr'
import { page } from './Page'
import { question } from './Question'

// Schemas
const survey = new schema.Entity('survey', {
  pages: [page],
  questions: [question],
})

export const normalize = input => normalizr(input, survey)

export const denormalize = (input, entities) => denormalizr(input, survey, entities)
