import React from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  Form,
} from 'antd'

const Option = Select.Option
const FormItem = Form.Item

export const QuestionTextItem = ({ disabled, value, onChange }) => (
  <Input disabled={disabled} placeholder="Réponse courte" size={value.size} style={{ width: 'auto' }} />
)

export const QuestionText = ({ value, onChange }) => (
  <Row type="flex" align="bottom">
    <Col span={16}>
      <QuestionTextItem disabled value={value} onChange={onChange} />
    </Col>
    <Col span={8}>
      <h3>Méta données</h3>
      <FormItem label="taille">
        <Select defaultValue={value.size} style={{ width: 120 }} onChange={size => onChange({ size })}>
          <Option value="small">Petit</Option>
          <Option value="default">Défaut</Option>
          <Option value="large">Grand</Option>
        </Select>
      </FormItem>
    </Col>
  </Row>
)

QuestionText.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
}

export const QuestionTextArea = ({ onChange, value }) => (
  <Input disabled placeholder="Réponse longue" />
)

export const QuestionDate = ({ onChange, value }) => (
  <DatePicker disabled placeholder="Sélectionner date" />
)

export const QuestionDiscreteScale = ({ onChange }) => (
  <span>QuestionDiscreteScale</span>
)

export const QuestionNumericalScale = ({ onChange }) => (
  <span>QuestionNumericalScale</span>
)

export const QuestionChoices = ({ onChange }) => (
  <span>QuestionChoices</span>
)

export const QuestionImage = ({ onChange }) => (
  <span>QuestionImage</span>
)

export const QuestionRank = ({ onChange }) => (
  <span>QuestionRank</span>
)

