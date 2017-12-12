import React from 'react'
import PropTypes from 'prop-types'
import { Input, Form, Slider } from 'antd'
import { NumericInput } from '../Components/EditFields'
import Editable from '../Components/Editable'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
}

export const Item = ({ disabled, value, onChange }) => (
  <Slider disabled={disabled} min={value.min} max={value.max} step={value.step} style={{ width: 400 }} />
)

export const Meta = ({ value, onChange }) => (
  <div>
    <FormItem label="min" {...formItemLayout}>
      <NumericInput min={0} max={100} value={value.min} onChange={min => onChange({ min })} />
    </FormItem>
    <FormItem label="max" {...formItemLayout}>
      <NumericInput min={0} max={100} value={value.max} onChange={max => onChange({ max })} />
    </FormItem>
    <FormItem label="pas" {...formItemLayout}>
      <NumericInput min={0} max={100} value={value.step} onChange={step => onChange({ step })} />
    </FormItem>
    <FormItem label="Indications" {...formItemLayout}>
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