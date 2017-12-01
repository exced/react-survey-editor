// @flow
import {
  // Types
  SURVEY,
  PAGE,
  QUESTION_TEXT,
  QUESTION_TEXT_AREA,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
} from '../Types/Editor'

export const values = {
  [SURVEY]: {
    title: 'Questionnaire',
  },
  [PAGE]: {
    title: 'Page',
    enabledIf: `true`,
  },
  [QUESTION_TEXT]: {
    title: 'Question texte court',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    size: 'small',
  },
  [QUESTION_TEXT_AREA]: {
    title: 'Question texte long',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
  },
  [QUESTION_DATE]: {
    title: 'Question date',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    begin: null,
    end: null,
  },
  [QUESTION_DISCRETE_SCALE]: {
    title: 'Question échelle discrète',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    begin: 0,
    end: 100,
    step: 1,
  },
  [QUESTION_NUMERICAL_SCALE]: {
    title: 'Question échelle numérique',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    begin: 0,
    end: 100,
    step: 1,
  },
  [QUESTION_CHOICES]: {
    title: 'Question choix multiples',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    choices: [],
  },
  [QUESTION_IMAGE]: {
    title: 'Question Image',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    maxSize: 10000,
  },
  [QUESTION_RANK]: {
    title: 'Question rang',
    mandatory: false,
    enabledIf: `true`,
    tooltip: '',
    choices: []
  }
}
