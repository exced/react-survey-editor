import React, { Component } from 'react'
import { Row, Col, Button, Icon, Layout } from 'antd'
import Handle from '../Components/Handle'

import style from './Styles/Editor'

const { Header, Footer, Sider, Content } = Layout
const ButtonGroup = Button.Group

const layoutStyle = {
  background: '#f7f7f7',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#f7f7f7',
  overflow: 'hidden',
}

export default class QuestionItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  toggle = () => this.setState({ collapsed: !this.state.collapsed })

  render() {

    const { collapsed } = this.state

    const {
      data: { item, index },
      } = this.props

    return (
      <p>Question {this.props.key}</p>
    )
  }
}
