import React from 'react'
import PropTypes from 'prop-types'
import { Input, DatePicker, Form, Select } from 'antd'
import Editable from '../Components/Editable'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker

const Option = Select.Option
const FormItem = Form.Item

const getNode = (type) => ({
  date: DatePicker,
  month: MonthPicker,
  week: WeekPicker,
  range: RangePicker,
})[type]

const getPlaceholder = (type) => ({
  date: "Sélectionner date",
  month: "Sélectionner mois",
  week: "Sélectionner semaine",
  range: ["Début", "Fin"],
})[type]

const Item = ({ disabled, value, onChange }) => {
  const Node = getNode(value.dateType)
  return (
    <Node disabled={disabled} placeholder={getPlaceholder(value.dateType)} onChange={onChange} />
  )
}

const Meta = ({ value, onChange, editable }) => (
  <div>
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