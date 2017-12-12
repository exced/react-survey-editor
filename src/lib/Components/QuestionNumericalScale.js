import React from 'react'
import PropTypes from 'prop-types'
import { Input, Form, Slider, InputNumber } from 'antd'
import Editable from '../Components/Editable'

const FormItem = Form.Item

export const Item = ({ disabled, value, onChange }) => (
  <Slider disabled={disabled} min={value.min} max={value.max} step={value.step} style={{ width: 400 }} />
)

const Meta = ({ value, onChange }) => (
  <div>
    <FormItem label="min">
      <InputNumber defaultValue={0} onChange={min => onChange({ min })} />
    </FormItem>
    <FormItem label="max">
      <InputNumber defaultValue={100} onChange={max => onChange({ max })} />
    </FormItem>
    <FormItem label="pas">
      <InputNumber defaultValue={1} onChange={step => onChange({ step })} />
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