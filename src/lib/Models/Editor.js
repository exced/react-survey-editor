import {
  // Types
  SURVEY,
  PAGE,
  QUESTION_TEXT,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
} from '../Types/Editor'

const types = {

}

const values = {
  [SURVEY]: {
    title: 'Questionnaire',
  },
  [PAGE]: {
    title: 'Page'
  },
  [QUESTION_TEXT]: {
    title: 'Question texte',
    maxLength: 150,
  },
  [QUESTION_DATE]: {
    title: 'Question date',
    begin: null,
    end: null,
  },
  [QUESTION_DISCRETE_SCALE]: {
    title: 'Question échelle discrète',
    begin: 0,
    end: 100,
    step: 1,
  },
  [QUESTION_NUMERICAL_SCALE]: {
    title: 'Question échelle numérique',
    begin: 0,
    end: 100,
    step: 1,
  },
  [QUESTION_CHOICES]: {
    title: 'Question choix multiples',
    choices: [],
  },
  [QUESTION_RANK]: {
    title: 'Question rang',
    choices: []
  }
}
