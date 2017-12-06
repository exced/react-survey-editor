import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Form, Slider, InputNumber } from 'antd'

const FormItem = Form.Item

export const Item = ({ disabled, value, onChange }) => (
  <Slider disabled={disabled} min={value.min} max={value.max} step={value.step} style={{ width: 400 }} />
)

const Meta = ({ value, onChange }) => (
  <Row type="flex" align="bottom">
    <Col span={16}>
      <Item disabled value={value} onChange={() => { }} />
    </Col>
    <Col span={8}>
      <h3>Méta données</h3>
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
    </Col>
  </Row>
)

Meta.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Meta