import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Form, Select } from 'antd'

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
    </Col>
  </Row>
)

Meta.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Meta