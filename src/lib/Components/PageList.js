import React from 'react'
import PropTypes from 'prop-types'
import DragList from './DragList'
import PageEditor from '../Containers/PageEditor'

const PageList = ({ data, onMove }) => (
    <DragList Component={PageEditor} data={data} onMove={onMove} />
)

PageList.propTypes = {
    data: PropTypes.array.isRequired,
    onMove: PropTypes.func.isRequired,
}

export default PageList
