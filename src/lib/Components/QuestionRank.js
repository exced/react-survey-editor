import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Form, Icon, Button } from 'antd'
import { Handle } from '../Components/DragList'
import DragList from './DragList'
import Editable from '../Components/Editable'

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

const ChoiceItem = ({ id }) => (
  <div>
    <Row style={{ padding: 10 }}>
      <Col span={2}><Handle /></Col>
      <Col span={22}><span>{id}</span></Col>
    </Row>
  </div>
)

export const Item = ({ disabled, value, onChange }) => (
  <DragList disabled={disabled} Component={ChoiceItem} data={value.choices} onChange={onChange} />
)

const Meta = ({ value, onChange }) => (
  <div>
    {value.choices.map((a, i) => (
      <FormItem label={`choix ${i + 1}`} {...formItemLayout}>
        <Input
          value={a}
          onChange={e => onChange({ choices: value.choices.map((b, j) => (j === i) ? e.target.value : b) })}
          placeholder={`Choix ${i + 1}`} size="small" style={{ width: 'auto' }} />
        <Icon type="minus-circle-o" style={{ color: 'red' }} disabled={value.choices.length === 1} onClick={() => onChange({ choices: value.choices.filter((b, j) => i !== j) })} />
      </FormItem>
    ))}
    <Button icon="plus" type="dashed" onClick={() => onChange({ choices: [...value.choices, 'Nouveau choix'] })} style={{ width: '60%' }}>Ajouter choix</Button>
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