import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Form, Select, Radio, Checkbox, InputNumber } from 'antd'

const Option = Select.Option
const FormItem = Form.Item

export const Item = ({ disabled, value, onChange }) => (
  <Input disabled={disabled} placeholder="Réponse courte" size={value.size} style={{ width: 'auto' }} />
)

const Meta = ({ value, onChange }) => (
  <Row type="flex" align="bottom">
    <Col span={16}>
      <Item disabled value={value} onChange={onChange} />
    </Col>
    <Col span={8}>
      <h3>Méta données</h3>
      <FormItem label="taille max (kb)">
        <InputNumber defaultValue={12000} onChange={maxSize => onChange({ maxSize })} />
      </FormItem>
    </Col>
  </Row>
)

Meta.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Meta