import React from 'react'
import PropTypes from 'prop-types'
import DragList from './DragList'
import QuestionEditor from '../Containers/QuestionEditor'

const QuestionList = ({ pageIndex, data, onMove }) => (
    <DragList Component={QuestionEditor} pageIndex={pageIndex} data={data} onMove={onMove} />
)

QuestionList.propTypes = {
    pageIndex: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    onMove: PropTypes.func.isRequired,
}

export default QuestionList
