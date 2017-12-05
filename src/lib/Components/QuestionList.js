import React from 'react'
import PropTypes from 'prop-types'
import DragList from './DragList'
import QuestionEditor from '../Containers/QuestionEditor'

const QuestionList = ({ data, onMove }) => (
    <DragList Component={QuestionEditor} data={data} onMove={onMove} />
)

QuestionList.propTypes = {
    data: PropTypes.array.isRequired,
    onMove: PropTypes.func.isRequired,
}

export default QuestionList
