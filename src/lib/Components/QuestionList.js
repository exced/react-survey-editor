import React from 'react'
import PropTypes from 'prop-types'
import DragList from './DragList'
import QuestionEditor from '../Containers/QuestionEditor'

const QuestionList = ({ collapsed, parent, data, onMove }) => (
  <DragList Component={QuestionEditor} collapsed={collapsed} parent={parent} data={data} onMove={onMove} />
)

QuestionList.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  parent: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired,
}

export default QuestionList
