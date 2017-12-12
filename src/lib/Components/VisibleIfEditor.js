import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Select, Form } from 'antd'
import { last } from 'lodash'
import {
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_RATE,
} from '../Types/Question'
import QuestionEditorItem from '../Components/QuestionEditorItem'

const FormItem = Form.Item
const { Option, OptGroup } = Select

const types = {
  BLOCK: "BLOCK",
  OPERATOR: "OPERATOR",
  COMPARATOR: "COMPARATOR",
  OPERAND: "OPERAND",
  VAR: "VAR",
}

const tokens = {
  OPAR: '(',
  CPAR: ')',
  OPDAND: '&&',
  OPDOR: '||',
  OPLEQ: '<=',
  OPLT: '<',
  OPGEQ: '>=',
  OPGT: '>',
  OPSEQ: '==',
  OPDEQ: '===',
}

class InputOption extends Component {
  constructor(props) {
    super(props)
    this.state = { value: null }
  }

  onChange = (value) => {
    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    const { value } = this.state
    const { children, color } = this.props
    return (
      <div>
        {value ?
          <span style={{ color }}>{JSON.stringify(value)}</span>
          : React.Children.map(children, child => React.cloneElement(child, { onChange: this.onChange }))
        }
      </div>
    )
  }
}

export default class VisibleIfEditor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      values: [],
      visible: false,
    }
  }

  addValue = (value) => this.setState({ values: [...this.state.values, value] })

  countInBlock = (type) => {
    const { values } = this.state
    let c = 0
    for (let i = values.length; i--;) {
      const v = values[i]
      if (v.type === types.BLOCK && v.tokens === tokens.OPAR) {
        return c
      }
      c += v.type === type
    }
    return c
  }

  renderOptions = e => e.map(({ value, title, color }) => <Option key={value} value={value} filterBy={title}><span style={{ color }}>{title}</span></Option>)

  renderBlocks = () => {
    const { values } = this.state
    const previous = last(values)
    let children = []

    if (!previous || (previous && previous.type === types.OPERATOR)) {
      children = [...children, { value: { type: types.BLOCK, tokens: tokens.OPAR, value: tokens.OPAR }, title: tokens.OPAR, color: 'red' }]
    }

    if ((previous && previous.type === types.VAR && this.countInBlock(types.VAR) > 1)) {
      children = [...children, { value: { type: types.BLOCK, tokens: tokens.CPAR, value: tokens.CPAR }, title: tokens.CPAR, color: 'red' }]
    }

    return (
      <OptGroup label="blocks">
        {this.renderOptions(children)}
      </OptGroup>
    )
  }

  renderOperators = () => {
    const { values } = this.state
    const previous = last(values)
    let children = []

    if (previous && (previous.type === types.OPERAND || (previous.type === types.BLOCK && previous.tokens === tokens.CPAR))) {
      children = [
        ...children,
        { value: { type: types.OPERATOR, tokens: tokens.OPDAND, value: tokens.OPDAND }, title: 'ET', color: 'red' },
        { value: { type: types.OPERATOR, tokens: tokens.OPDOR, value: tokens.OPDOR }, title: 'OU', color: 'red' },
      ]
    }

    return (
      <OptGroup label="operators">
        {this.renderOptions(children)}
      </OptGroup>
    )
  }

  renderComparators = () => {
    const { values } = this.state
    const previous = last(values)
    let children = []

    const leq = { value: { type: types.COMPARATOR, tokens: tokens.OPLEQ, value: tokens.OPLEQ }, title: '<=', color: 'blue' }
    const lt = { value: { type: types.COMPARATOR, tokens: tokens.OPLT, value: tokens.OPLT }, title: '<', color: 'blue' }
    const geq = { value: { type: types.COMPARATOR, tokens: tokens.OPGEQ, value: tokens.OPGEQ }, title: '>=', color: 'blue' }
    const gt = { value: { type: types.COMPARATOR, tokens: tokens.OPGT, value: tokens.OPGT }, title: '>', color: 'blue' }
    const deq = { value: { type: types.COMPARATOR, tokens: tokens.OPDEQ, value: tokens.OPDEQ }, title: '===', color: 'blue' }

    if (previous && previous.type === types.VAR) {
      children = [
        ...children,
        ...[leq, lt, geq, gt, deq],
      ]
    }

    return (
      <OptGroup label="comparators">
        {this.renderOptions(children)}
      </OptGroup>
    )
  }

  renderOperands = () => {
    const { values } = this.state
    const { questionsMap } = this.props
    const previous = last(values)
    const previousQuestion = values && last(values.splice(0, values.length - 1))

    if (previous && previous.type === types.COMPARATOR) {
      const question = questionsMap[previousQuestion.value]
      const value = { type: types.OPERAND, value: "" }
      return (
        <OptGroup label="operands">
          <Option key={value} value={value} filterBy="title">
            <InputOption onChange={value => this.addValue({ type: types.OPERAND, value })}>
              <QuestionEditorItem disabled value={question} editable={false} />
            </InputOption>
          </Option>
        </OptGroup>
      )
    }

    return (
      <OptGroup label="operands">
      </OptGroup>
    )
  }

  renderVars = () => {
    const { values } = this.state
    const { questionsMap } = this.props
    const previous = last(values)
    let children = []

    // Keep only questions we can extract simple value from
    if (!previous || (previous && previous.type === types.BLOCK) || (previous && previous.type === types.OPERATOR)) {
      children =
        Object.values(questionsMap)
          .filter(e => e.type === QUESTION_DATE || e.type === QUESTION_DISCRETE_SCALE || e.type === QUESTION_NUMERICAL_SCALE || e.type === QUESTION_RATE)
          .map(e => ({ value: { type: types.VAR, value: e.id }, title: e.title, color: 'green' }))
    }

    return (
      <OptGroup label="vars">
        {this.renderOptions(children)}
      </OptGroup>
    )
  }

  onChange = (values) => {
    this.setState({ values })
    // Generates code as string because we want dynamic conditional rendering
    this.props.onChange(Object.values(values).reduce((a, e) => a + (e.type === types.VAR ? "${values[" + e.value + "]}" : e.value), ''))
  }

  render() {

    return (
      <div>
        <FormItem label="Visible si">
          <Select
            defaultValue={this.state.values}
            mode="multiple"
            filterOption
            optionFilterProp="filterBy"
            style={{ width: '50%' }}
            placeholder="Visible si"
            onChange={this.onChange}
            size="large"
          >
            {this.renderBlocks()}
            {this.renderOperators()}
            {this.renderComparators()}
            {this.renderOperands()}
            {this.renderVars()}
          </Select>
        </FormItem>
      </div>
    )
  }
}

VisibleIfEditor.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}
