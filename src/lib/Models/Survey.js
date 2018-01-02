import { uniqueId } from 'lodash'

export const initialValue = () => ({
  id: `@@${uniqueId()}`,
  title: 'Questionnaire',
  description: 'Description',
  responseTime: '',
  active: false,
  dates: [],
  password: '',
  link: '',
  pages: [],
})