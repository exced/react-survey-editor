import React from 'react'
import PropTypes from 'prop-types'
import { Input, Form, InputNumber } from 'antd'
import Editable from '../Components/Editable'

const FormItem = Form.Item

export const Item = ({ disabled, value, onChange }) => (
  <Input disabled={disabled} placeholder="Réponse courte" size={value.size} style={{ width: 'auto' }} />
)

export const Meta = ({ value, onChange }) => (
  <div>
    <FormItem label="taille max (kb)">
      <InputNumber defaultValue={12000} onChange={maxSize => onChange({ maxSize })} />
    </FormItem>
    <FormItem label="Indications">
      <Input value={value.tooltip} onChange={e => onChange({ tooltip: e.target.value })} placeholder="Indications" size="small" style={{ width: 'auto' }} />
    </FormItem>
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