import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Icon, Layout, Dropdown, Menu } from 'antd'
import Handle from '../Components/Handle'
import {
  QUESTION_TEXT,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
} from '../Types/Editor'
import QuestionMenu from '../Components/QuestionMenu'
import { typeToName } from '../Transforms/Editor'

import style from './Styles/Editor'

const layoutStyle = {
  margin: 20,
  background: '#f7f7f7',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#f7f7f7',
  overflow: 'hidden',
}

const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu

const QuestionText = ((props) => <div>Question Text Content !!!</div>)

const dispatchQuestion = (type, value) => ({
  [QUESTION_TEXT]: <QuestionText {...this.props} />,
}[type])

class QuestionEditor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mandatory: false,
    }
  }

  toggleMandatory = () => this.setState({ mandatory: !this.state.mandatory })

  onChangeType = (type) => { }

  render() {

    const { mandatory } = this.state

    const {
      data: { item, index },
      collapsed,
      } = this.props

    return (
      <Layout style={layoutStyle}>
        <Row style={{ padding: 10 }}>
          <Col span={2}>
            <Handle />
          </Col>
          <Col span={18}>
            <div style={{ textAlign: 'center' }}>
              <h3>
                {`${item.title} ${index}`}
                <sup>
                  <Button type="dashed" onClick={this.toggleMandatory} shape="circle" icon={mandatory ? 'star' : 'star-o'} size='small' />
                </sup>
              </h3>
            </div>
          </Col>
          <Col span={4}>
            <Dropdown overlay={<QuestionMenu onClick={this.onChangeType} />}>
              <Button type="secondary" icon="file" size='large'>{typeToName()}</Button>
            </Dropdown>
            <Button onClick={this.toggle} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
            <Button type="danger" onClick={this.toggle} shape="circle" icon='delete' size='large' />
          </Col>
        </Row>
        <Content>
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor)
