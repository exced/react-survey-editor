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
import {
  QuestionText,
  QuestionDate,
  QuestionDiscreteScale,
  QuestionNumericalScale,
  QuestionChoices,
  QuestionImage,
  QuestionRank,
} from '../Components/QuestionEditorComponents'
import QuestionMenu from '../Components/QuestionMenu'
import { setItem, moveItem, removeItem } from '../Actions/Editor'
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

const dispatcher = {
  [QUESTION_TEXT]: QuestionText,
  [QUESTION_DATE]: QuestionDate,
  [QUESTION_DISCRETE_SCALE]: QuestionDiscreteScale,
  [QUESTION_NUMERICAL_SCALE]: QuestionNumericalScale,
  [QUESTION_CHOICES]: QuestionChoices,
  [QUESTION_IMAGE]: QuestionImage,
  [QUESTION_RANK]: QuestionRank,
}

class QuestionEditor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mandatory: false,
    }
  }

  toggleMandatory = () => this.setState({ mandatory: !this.state.mandatory })

  onChangeType = (type) => { }

  onClickOptions = ({ key }) => { }

  render() {

    const { mandatory } = this.state

    const {
      data: { item, index },
      collapsed,
      setQuestion,
      moveQuestion,
      removeQuestion,
      } = this.props

    const { id } = item

    const EditorComponent = dispatcher[item.type]

    const options = (
      <Menu onClick={this.onClickOptions}>
        <Menu.Item key="1">Visible si</Menu.Item>
      </Menu>
    )

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
              <Button shape="circle" type="secondary" icon="setting" size='large'>{typeToName()}</Button>
            </Dropdown>
            <Dropdown overlay={options}>
              <Button shape="circle" icon='ellipsis' size='large' />
            </Dropdown>
            <Button type="danger" onClick={this.toggle} shape="circle" icon='delete' size='large' />
          </Col>
        </Row>
        <Content>
          {!collapsed && (
            <EditorComponent onChange={(v) => setQuestion(id, v)} />
          )}
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = dispatch => ({
  setQuestion: (id, value) => dispatch(setItem(id, value)),
  moveQuestion: (oldIndex, newIndex) => dispatch(moveItem()),
  removeQuestion: (id) => dispatch(removeItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor)
