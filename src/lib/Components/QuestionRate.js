import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Form, Rate } from 'antd'

const FormItem = Form.Item

export const Item = ({ disabled, value, onChange }) => (
  <Rate defaultValue={3} disabled={disabled} onChange={onChange} />
)

const Meta = ({ value, onChange }) => (
  <Row type="flex" align="bottom">
    <Col span={16}>
      <Item disabled value={value} onChange={() => { }} />
    </Col>
    <Col span={8}>
      <h3>Méta données</h3>
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