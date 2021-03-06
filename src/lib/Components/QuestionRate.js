import React from 'react'
import PropTypes from 'prop-types'
import { Input, Form, Rate } from 'antd'
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
  <Rate count={value.count} disabled={disabled} onChange={onChange} />
)

export const Meta = ({ value, onChange }) => (
  <div>
    <FormItem label="max" {...formItemLayout}>
      <NumericInput min={3} max={10} value={value.count} onChange={count => onChange({ count })} />
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