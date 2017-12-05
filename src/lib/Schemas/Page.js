import { schema } from 'normalizr'
import { question } from './Question'

// Schemas
export const page = new schema.Entity('pages', { questions: [question] })
