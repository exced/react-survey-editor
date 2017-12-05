import {
  QUESTION_TEXT,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
} from '../Types/Question'

export const typeToName = (type) => ({
  [QUESTION_TEXT]: "Texte",
  [QUESTION_DATE]: "Date",
  [QUESTION_DISCRETE_SCALE]: "Échelle discrète",
  [QUESTION_NUMERICAL_SCALE]: "Échelle numérique",
  [QUESTION_CHOICES]: "Choix",
  [QUESTION_IMAGE]: "Image",
  [QUESTION_RANK]: "Classement",
})[type]