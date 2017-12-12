import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import Editable from '../Components/Editable'

export const Item = ({ disabled, value, onChange }) => (
  <Input disabled={disabled} placeholder="Réponse courte" size={value.size} style={{ width: 'auto' }} />
)

export const Meta = ({ value, onChange }) => (
  <div>

  </div>
)

const Default = (props) => Editable(Item, Meta)(props)

Default.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  editable: PropTypes.bool,
}

Default.defaultProps = {
  editable: true
}

export default Default