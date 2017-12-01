import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Icon, Layout, Dropdown, Menu } from 'antd'
import Handle from '../Components/Handle'
import QuestionList from '../Components/QuestionList'
import { removeItem, addItem } from '../Actions/Editor'
import QuestionMenu from '../Components/QuestionMenu'
import { getQuestions } from '../Selectors/Editor'

import style from './Styles/Editor'

const { Header, Footer, Sider, Content } = Layout
const ButtonGroup = Button.Group
const SubMenu = Menu.SubMenu

const layoutStyle = {
  background: '#e8e5e5',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#e8e5e5',
  overflow: 'hidden',
}

class PageEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  toggle = () => this.setState({ collapsed: !this.state.collapsed })

  onAddQuestion = (type) => this.props.addQuestion(type, this.props.questions.length, this.props.data.item.id)

  onClickOptions = ({ key }) => { }

  render() {

    const { collapsed } = this.state
    const { data: { item, index }, questions } = this.props

    const options = (
      <Menu onClick={this.onClickOptions}>
        <Menu.Item key="1">Visible si</Menu.Item>
      </Menu>
    )

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
              <h2>{`${item.title} ${index}`}</h2>
            </div>
          </Col>
          <Col span={4}>
            <div style={{ padding: 10 }}>
              <Dropdown overlay={<QuestionMenu onClick={this.onAddQuestion} />}>
                <Button type="secondary" shape="circle" icon="plus" size='large' />
              </Dropdown>
              <Button onClick={this.toggle} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
              <Dropdown overlay={options}>
                <Button shape="circle" icon='ellipsis' size='large' />
              </Dropdown>
              <Button type="danger" onClick={this.toggle} shape="circle" icon='delete' size='large' />
            </div>
          </Col>
        </Row>
        <Content>
          <QuestionList collapsed={collapsed} data={questions} />
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  questions: getQuestions(state, ownProps.data.item.id),
})

const mapDispatchToProps = dispatch => ({
  removePage: (id) => dispatch(removeItem(id)),
  addQuestion: (type, index, pageId) => dispatch(addItem(type, index, pageId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageEditor)
