import React from 'react'
import PropTypes from 'prop-types'
import DragList from './DragList'
import PageEditor from '../Containers/PageEditor'

const PageList = ({ parent, data, onMove }) => (
  <DragList Component={PageEditor} parent={parent} data={data} onMove={onMove} />
)

PageList.propTypes = {
  parent: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired,
}

export default PageList
