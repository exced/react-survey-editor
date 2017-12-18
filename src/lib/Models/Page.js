import { uniqueId } from 'lodash'

export const initialValue = () => ({
    id: uniqueId(),
    title: 'Page',
    visibleIf: 'true',
    questions: [],
  })
