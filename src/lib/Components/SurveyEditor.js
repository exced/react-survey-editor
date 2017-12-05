import React from 'react'
import PropTypes from 'prop-types'
import { EditText } from '../Components/EditFields'
import PageList from '../Components/PageList'

const SurveyEditor = ({ item, onChange, onMove }) => (
  <div style={{ textAlign: 'center' }}>
    <h3>
      <EditText value={item.title} onChange={title => onChange({ title })} size="large" placeholder="Questionnaire" />
    </h3>
    <PageList parent={item} data={item.pages} onMove={onMove} />
  </div>
)

SurveyEditor.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
}

export default SurveyEditor