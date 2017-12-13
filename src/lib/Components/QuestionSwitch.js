import React from 'react'
import PropTypes from 'prop-types'
import { Input, Switch, Form } from 'antd'
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
  <Switch disabled={disabled} checkedChildren={value.checkedChildren} unCheckedChildren={value.unCheckedChildren} onChange={onChange} />
)

export const Meta = ({ value, onChange, editable }) => (
  <div>
    <FormItem label="Texte positif" {...formItemLayout}>
      <Input value={value.checkedChildren} onChange={e => onChange({ checkedChildren: e.target.value })} placeholder="Indications" size="small" style={{ width: 'auto' }} />
    </FormItem>
    <FormItem label="Texte négatif" {...formItemLayout}>
      <Input value={value.unCheckedChildren} onChange={e => onChange({ unCheckedChildren: e.target.value })} placeholder="Indications" size="small" style={{ width: 'auto' }} />
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