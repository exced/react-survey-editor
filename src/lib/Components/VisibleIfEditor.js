import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Select, Form } from 'antd'
import { last } from 'lodash'
import {
  QUESTION_SWITCH,
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
  VAR: "VAR",
  VALUE: "VALUE",
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
  TRUE: 'true',
  FALSE: 'false',
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
      if (v.type === types.BLOCK && v.value === tokens.OPAR) {
        return c
      }
      c += v.type === type
    }
    return c
  }

  renderOptions = e => (
    e.map(({ value, title, render }) =>
      <Option key={value} value={value} filterBy={title}>
        {render()}
      </Option>)
  )

  renderBlocks = () => {
    const { values } = this.state
    const previous = last(values)
    let children = []

    if (!previous || (previous && previous.type === types.OPERATOR)) {
      children = [...children, {
        value: { type: types.BLOCK, value: tokens.OPAR }, title: tokens.OPAR, render: () => <span style={{ color: 'red' }}>{tokens.OPAR}</span>
      }]
    }

    if ((previous && previous.type === types.VAR && this.countInBlock(types.VAR) > 1)) {
      children = [...children, { value: { type: types.BLOCK, value: tokens.CPAR }, title: tokens.CPAR, render: () => <span style={{ color: 'red' }}>{tokens.CPAR}</span> }]
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

    if (previous && (previous.type === types.VALUE || (previous.type === types.BLOCK && previous.value === tokens.CPAR))) {
      children = [
        ...children,
        { value: { type: types.OPERATOR, value: tokens.OPDAND }, title: tokens.OPDAND, render: () => <span style={{ color: 'red' }}>{tokens.OPDAND}</span> },
        { value: { type: types.OPERATOR, value: tokens.OPDOR }, title: tokens.OPDOR, render: () => <span style={{ color: 'red' }}>{tokens.OPDOR}</span> },
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
    const { questionsMap } = this.props
    let children = []

    const comparators = {
      leq: { value: { type: types.COMPARATOR, value: tokens.OPLEQ }, title: tokens.OPLEQ, render: () => <span style={{ color: 'blue' }}>{tokens.OPLEQ}</span> },
      lt: { value: { type: types.COMPARATOR, value: tokens.OPLT }, title: tokens.OPLT, render: () => <span style={{ color: 'blue' }}>{tokens.OPLT}</span> },
      geq: { value: { type: types.COMPARATOR, value: tokens.OPGEQ }, title: tokens.OPGEQ, render: () => <span style={{ color: 'blue' }}>{tokens.OPGEQ}</span> },
      gt: { value: { type: types.COMPARATOR, value: tokens.OPGT }, title: tokens.OPGT, render: () => <span style={{ color: 'blue' }}>{tokens.OPGT}</span> },
      deq: { value: { type: types.COMPARATOR, value: tokens.OPDEQ }, title: tokens.OPDEQ, render: () => <span style={{ color: 'blue' }}>{tokens.OPDEQ}</span> },
    }

    const comparatorsMap = {
      [QUESTION_SWITCH]: [comparators.deq],
      [QUESTION_RATE]: [comparators.leq, comparators.lt, comparators.geq, comparators.gt, comparators.deq],
      [QUESTION_DATE]: [comparators.leq, comparators.lt, comparators.geq, comparators.gt, comparators.deq],
      [QUESTION_DISCRETE_SCALE]: [comparators.leq, comparators.lt, comparators.geq, comparators.gt, comparators.deq],
      [QUESTION_NUMERICAL_SCALE]: [comparators.leq, comparators.lt, comparators.geq, comparators.gt, comparators.deq],
    }

    if (previous && previous.type === types.VAR) {
      const questionType = questionsMap[previous.value].type
      children = [
        ...children,
        ...comparatorsMap[questionType],
      ]
    }

    return (
      <OptGroup label="comparators">
        {this.renderOptions(children)}
      </OptGroup>
    )
  }

  renderValues = () => {
    const { values } = this.state
    const { questionsMap } = this.props
    const previous = last(values)
    const previousQuestion = values && last(values.slice(0, values.length - 1))

    const optionsMap = {
      [QUESTION_SWITCH]: [
        { value: { type: types.VALUE, value: tokens.TRUE }, title: tokens.TRUE, render: () => <span style={{ color: 'orange' }}>{tokens.TRUE}</span> },
        { value: { type: types.VALUE, value: tokens.FALSE }, title: tokens.FALSE, render: () => <span style={{ color: 'orange' }}>{tokens.FALSE}</span> },
      ],
      [QUESTION_RATE]: [],
      [QUESTION_DATE]: [],
      [QUESTION_DISCRETE_SCALE]: [],
      [QUESTION_NUMERICAL_SCALE]: [],
    }

    if (previous && previous.type === types.COMPARATOR) {
      const question = questionsMap[previousQuestion.value]
      const value = { type: types.VALUE, value: "" }
      const options = optionsMap[question.type]
      return (
        <OptGroup label="values">
          {(options && options.length > 0) ?
            this.renderOptions(options)
            :
            <Option key={value} value={value} filterBy="title">
              <InputOption onChange={value => this.addValue({ type: types.VALUE, value })} color="orange">
                <QuestionEditorItem disabled value={question} editable={false} />
              </InputOption>
            </Option>
          }
        </OptGroup>
      )
    }

    return (
      <OptGroup label="values">
      </OptGroup>
    )
  }

  renderVars = () => {
    const { values } = this.state
    const { previousQuestions } = this.props
    const previous = last(values)
    let children = []

    // Keep only questions we can extract simple value from
    if (!previous || (previous && previous.type === types.BLOCK) || (previous && previous.type === types.OPERATOR)) {
      children =
        previousQuestions
          .filter(e => [QUESTION_SWITCH, QUESTION_DATE, QUESTION_DISCRETE_SCALE, QUESTION_NUMERICAL_SCALE, QUESTION_RATE].includes(e.type))
          .map(e => ({ value: { type: types.VAR, value: e.id }, title: e.title, render: () => <span style={{ color: 'green' }}>{e.title}</span> }))
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
            {this.renderVars()}
            {this.renderValues()}
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
