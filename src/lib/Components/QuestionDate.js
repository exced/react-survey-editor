import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, DatePicker, Form, Select } from 'antd'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker

const Option = Select.Option
const FormItem = Form.Item

const node = (type) => ({
  date: DatePicker,
  month: MonthPicker,
  week: WeekPicker,
  range: RangePicker,
})[type]

const placeholder = (type) => ({
  date: "Sélectionner date",
  month: "Sélectionner mois",
  week: "Sélectionner semaine",
  range: ["Début", "Fin"],
})[type]

export const Item = ({ disabled, value, onChange }) => {
  const Node = node(value.dateType)
  return (
    <Node disabled={disabled} placeholder={placeholder(value.dateType)} onChange={onChange} />
  )
}

const Meta = ({ value, onChange, editable }) => (
  editable ?
    <Row type="flex" align="bottom">
      <Col span={16}>
        <Item disabled value={value} onChange={() => { }} />
      </Col>
      <Col span={8}>
        <h3>Méta données</h3>
        <FormItem label="Type">
          <Select defaultValue={value.dateType} style={{ width: 120 }} onChange={dateType => onChange({ dateType })}>
            <Option value="date">Date</Option>
            <Option value="month">Mois</Option>
            <Option value="week">Semaine</Option>
            <Option value="range">Durée</Option>
          </Select>
        </FormItem>
        <FormItem label="Indications">
          <Input value={value.tooltip} onChange={tooltip => onChange({ tooltip })} placeholder="Indications" size="small" style={{ width: 'auto' }} />
        </FormItem>
      </Col>
    </Row>
    :
    <Item disabled={false} value={value} onChange={onChange} />
)

Meta.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Meta