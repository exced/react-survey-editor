import React from 'react'
import PropTypes from 'prop-types'
import DragList from './DragList'
import QuestionEditor from '../Containers/QuestionEditor'

const QuestionList = ({ parent, data, onMove }) => (
  <DragList Component={QuestionEditor} parent={parent} data={data} onMove={onMove} />
)

QuestionList.propTypes = {
  parent: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired,
}

export default QuestionList
