import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  Form,
} from 'antd'

import style from './Styles/Editor'

const Option = Select.Option
const FormItem = Form.Item

export const QuestionText = ({ onChange, value }) => (
  <Row type="flex" align="bottom">
    <Col span={16}>
      <Input disabled placeholder="Réponse courte" size={value.size} style={{ width: 'auto' }} />
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

