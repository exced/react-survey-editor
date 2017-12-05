import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Form, Icon, Button, InputNumber, Radio, Checkbox } from 'antd'
import { EditText } from '../Components/EditFields'

const { RadioGroup } = Radio
const FormItem = Form.Item

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}

export const Item = ({ disabled, max, value, onChange }) => (
  max === 1 ?
    <Radio disabled={disabled} style={radioStyle} value={value} onChange={onChange}>{value}</Radio> :
    <Checkbox disabled={disabled} onChange={onChange}>{value}</Checkbox>
)

export const Items = ({ disabled, value, onChange }) => (
  <RadioGroup disabled>
    {value.choices.map((a, i) => (
      <Item max={value.choices.max} disabled value={a} onChange={onChange} size="small" />
    ))}
  </RadioGroup>
)

const Meta = ({ value, onChange }) => (
  <Row type="flex" align="bottom">
    <Col span={16}>
      <Items disabled value={value} onChange={onChange} />
    </Col>
    <Col span={8}>
      <h3>Méta données</h3>
      <FormItem label="max">
        <InputNumber defaultValue={4} onChange={max => onChange({ max })} />
      </FormItem>
      {value.choices.map((a, i) => (
        <FormItem label={`choix ${i}`}>
          <EditText
            value={a}
            onChange={v => onChange({ choices: value.choices.map((b, j) => (j === i) ? v : b) })}
            size="small"
            placeholder={`Choix ${i}`}
          />
          <Icon
            type="minus-circle-o"
            disabled={value.choices.length === 1}
            onClick={() => onChange({ choices: value.choices.filter((b, j) => i !== j) })}
          />
        </FormItem>
      ))}
      <Button
        type="dashed"
        onClick={() => onChange({ choices: [value.choices, 'Nouveau choix'] })}
        style={{ width: '60%' }}
      >
        <Icon type="plus" /> Ajouter choix
    </Button>
    </Col>
  </Row>
)

Meta.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Meta