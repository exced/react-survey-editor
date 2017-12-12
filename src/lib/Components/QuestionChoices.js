import React from 'react'
import PropTypes from 'prop-types'
import { Input, Form, Icon, Button, Radio, Checkbox } from 'antd'
import { NumericInput } from '../Components/EditFields'
import Editable from '../Components/Editable'

const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}


const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}

export const Item = ({ disabled, value, onChange }) => (
  <div>
    {value.max === 1 ?
      <RadioGroup disabled={disabled}>
        {value.choices.map((a, i) => (
          <Radio key={`${a}-${i}`} disabled={disabled} style={radioStyle} value={a} onChange={onChange}>{a}</Radio>
        ))}
      </RadioGroup>
      :
      <CheckboxGroup disabled={disabled}>
        {value.choices.map((a, i) => (
          <Checkbox key={`${a}-${i}`} disabled={disabled} style={radioStyle} value={a} onChange={onChange}>{a}</Checkbox>
        ))}
      </CheckboxGroup>
    }
  </div>
)

const Meta = ({ value, onChange }) => (
  <div>
    <FormItem label="Choix max" {...formItemLayout}>
      <NumericInput min={0} max={4} value={value.max} onChange={max => onChange({ max })} />
    </FormItem>
    {value.choices.map((a, i) => (
      <FormItem label={`choix ${i + 1}`} {...formItemLayout}>
        <Input
          value={a}
          onChange={e => onChange({ choices: value.choices.map((b, j) => (j === i) ? e.target.value : b) })}
          placeholder={`Choix ${i + 1}`} size="small" style={{ width: 'auto' }} />
        <Icon type="minus-circle-o" style={{ color: 'red' }} disabled={value.choices.length === 1} onClick={() => onChange({ choices: value.choices.filter((b, j) => i !== j) })} />
      </FormItem>
    ))}
    <Button icon="plus" disabled={value.choices.length >= 4} type="dashed" onClick={() => onChange({ choices: [...value.choices, 'Nouveau choix'] })} style={{ width: '60%' }}>Ajouter choix</Button>
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