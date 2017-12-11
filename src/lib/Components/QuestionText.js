import React from 'react'
import PropTypes from 'prop-types'
import { Input, Form, Select } from 'antd'
import Editable from '../Components/Editable'

const Option = Select.Option
const FormItem = Form.Item

export const Item = ({ disabled, value, onChange }) => (
  <Input disabled={disabled} placeholder="Réponse courte" size={value.size} style={{ width: 'auto' }} />
)

export const Meta = ({ value, onChange, editable }) => (
  <div>
    <FormItem label="Taille">
      <Select defaultValue={value.size} style={{ width: 120 }} onChange={size => onChange({ size })}>
        <Option value="small">Petit</Option>
        <Option value="default">Défaut</Option>
        <Option value="large">Grand</Option>
      </Select>
    </FormItem>
    <FormItem label="Indications">
      <Input value={value.tooltip} onChange={e => onChange({ tooltip: e.target.value })} placeholder="Indications" size="small" style={{ width: 'auto' }} />
    </FormItem>
  </div>
)

const Default = ({ value, onChange, editable }) => Editable(Item, Meta)

Default.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  editable: PropTypes.bool,
}

Default.defaultProps = {
  editable: true
}

export default Default