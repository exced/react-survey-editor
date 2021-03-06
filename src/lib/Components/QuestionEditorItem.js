import React from 'react'
import PropTypes from 'prop-types'
import {
  QUESTION_SWITCH,
  QUESTION_TEXT,
  QUESTION_TEXT_AREA,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
  QUESTION_MATRIX,
  QUESTION_RATE,
} from '../Types/Question'
import QuestionSwitch from '../Components/QuestionSwitch'
import QuestionText from '../Components/QuestionText'
import QuestionTextArea from '../Components/QuestionTextArea'
import QuestionDate from '../Components/QuestionDate'
import QuestionDiscreteScale from '../Components/QuestionDiscreteScale'
import QuestionNumericalScale from '../Components/QuestionNumericalScale'
import QuestionChoices from '../Components/QuestionChoices'
import QuestionImage from '../Components/QuestionImage'
import QuestionRank from '../Components/QuestionRank'
import QuestionMatrix from '../Components/QuestionMatrix'
import QuestionRate from '../Components/QuestionRate'

const dispatcher = (type) => ({
  [QUESTION_SWITCH]: QuestionSwitch,
  [QUESTION_TEXT]: QuestionText,
  [QUESTION_TEXT_AREA]: QuestionTextArea,
  [QUESTION_DATE]: QuestionDate,
  [QUESTION_DISCRETE_SCALE]: QuestionDiscreteScale,
  [QUESTION_NUMERICAL_SCALE]: QuestionNumericalScale,
  [QUESTION_CHOICES]: QuestionChoices,
  [QUESTION_MATRIX]: QuestionMatrix,
  [QUESTION_IMAGE]: QuestionImage,
  [QUESTION_RANK]: QuestionRank,
  [QUESTION_RATE]: QuestionRate,
})[type]

const QuestionEditorItem = ({ value, onChange, editable }) => {
  const Node = dispatcher(value.type)
  return (
    <Node value={value} onChange={onChange} editable={editable} />
  )
}

QuestionEditorItem.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default QuestionEditorItem