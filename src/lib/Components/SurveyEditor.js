import React from 'react'
import PropTypes from 'prop-types'
import { EditText } from '../Components/EditFields'
import PageList from '../Containers/PageList'

const SurveyEditor = ({ title, onChange }) => (
  <div style={{ textAlign: 'center' }}>
    <h3>
      <EditText value={title} onChange={title => onChange({ title })} size="large" placeholder="Questionnaire" />
    </h3>
    <PageList />
  </div>
)

SurveyEditor.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
}

export default SurveyEditor