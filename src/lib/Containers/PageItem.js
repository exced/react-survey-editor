import React, { Component } from 'react'
import { Row, Col, Button, Icon, Layout } from 'antd'
import Handle from '../Components/Handle'
import QuestionList from '../Components/QuestionList'

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

export default class PageItem extends Component {
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
      addQuestion,
      } = this.props

    return (
      <Layout style={layoutStyle}>
        <Row>
          <Col span={2}>
            <div style={{ padding: 10 }}>
              <Handle />
            </div>
          </Col>
          <Col span={18}>
            <div style={{ textAlign: 'center' }}>
              <h3>{`${item.title} ${index}`}</h3>
            </div>
          </Col>
          <Col span={4}>
            <div style={{ padding: 10 }}>
              <Button onClick={this.toggle} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
              <Button onClick={this.toggle} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
              <Button onClick={this.toggle} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
              <Button onClick={this.toggle} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
            </div>
          </Col>
        </Row>
        <Content>
          {collapsed ?
            <p>collapsed</p>
            :
            <QuestionList key={this.props.key} data={item.questions} />
          }
        </Content>
      </Layout>
    )
  }
}
