import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { last } from 'lodash'

const { Option, OptGroup } = Select

const types = {
  BLOCK: "BLOCK",
  OPERATOR: "OPERATOR",
  QUESTION: "QUESTION",
}

const tokens = {
  PARO: '(',
  PARC: ')',
  OPDAND: '&&',
  OPDOR: '||',
}

export default class VisibleIfEditor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      values: null,
    }
  }

  countInBlock = (type) => {
    const { values } = this.state
    let c = 0
    for (let i = values.length; i--;) {
      let v = values[i]
      if (v.type === types.BLOCK && v.tokens === tokens.PARO) {
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
      children = [...children, { value: { type: types.BLOCK, tokens: tokens.PARO, value: tokens.PARO }, title: tokens.PARO, color: 'red' }]
    }

    if ((previous && previous.type === types.QUESTION && this.countInBlock(types.QUESTION) > 1)) {
      children = [...children, { value: { type: types.BLOCK, tokens: tokens.PARC, value: tokens.PARC }, title: tokens.PARC, color: 'red' }]
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

    if (previous && (previous.type === types.QUESTION || (previous.type === types.BLOCK && previous.tokens === tokens.PARC))) {
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

  renderQuestions = () => {
    const { values } = this.state
    const { questions } = this.props
    const previous = last(values)
    let children = []

    if (!previous || (previous && previous.type === types.BLOCK) || (previous && previous.type === types.OPERATOR)) {
      children = questions.map(e => ({ value: { type: types.QUESTION, value: e.id }, title: e.title, color: 'green' }))
    }

    return (
      <OptGroup label="questions">
        {this.renderOptions(children)}
      </OptGroup>
    )
  }

  onChange = (values) => {
    this.setState({ values })
    // Generates code as string because we want dynamic conditional rendering
    const visibleIf = Object.values(values).reduce((a, e) => a + (e.type === types.QUESTION ? "${values[" + e.value + "]}" : e.value), '')
    this.props.onChange(visibleIf)
  }

  render() {
    return (
      <div>
        <Select
          mode="multiple"
          filterOption
          optionFilterProp="filterBy"
          style={{ width: '100%' }}
          placeholder="Please select"
          onChange={this.onChange}
          size="large"
        >
          {this.renderBlocks()}
          {this.renderOperators()}
          {this.renderQuestions()}
        </Select>
      </div>
    )
  }
}

VisibleIfEditor.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
}
