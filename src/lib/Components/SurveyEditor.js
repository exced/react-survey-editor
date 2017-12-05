import React from 'react'
import PropTypes from 'prop-types'
import { EditText } from '../Components/EditFields'
import PageList from '../Containers/PageList'

const SurveyEditor = ({ item, onChange }) => (
  <div style={{ textAlign: 'center' }}>
    <h3>
      <EditText value={item.title} onChange={title => onChange(item.id, { title })} size="large" placeholder="Questionnaire" />
    </h3>
    <PageList />
  </div>
)

SurveyEditor.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.string.isRequired,
}

export default SurveyEditor