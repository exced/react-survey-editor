import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Layout, Dropdown, Menu } from 'antd'
import {
  QUESTION_TEXT,
  QUESTION_TEXT_AREA,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
} from '../Types/Question'
import {
  QuestionText,
  QuestionTextArea,
  QuestionDate,
  QuestionDiscreteScale,
  QuestionNumericalScale,
  QuestionChoices,
  QuestionImage,
  QuestionRank,
} from '../Components/QuestionEditorComponents'
import { EditText } from '../Components/EditFields'
import QuestionMenu from '../Components/QuestionMenu'
import { typeToName } from '../Transforms/Editor'

const layoutStyle = {
  margin: 20,
  background: '#f7f7f7',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#f7f7f7',
  overflow: 'hidden',
}

const { Content } = Layout

const dispatcher = {
  [QUESTION_TEXT]: QuestionText,
  [QUESTION_TEXT_AREA]: QuestionTextArea,
  [QUESTION_DATE]: QuestionDate,
  [QUESTION_DISCRETE_SCALE]: QuestionDiscreteScale,
  [QUESTION_NUMERICAL_SCALE]: QuestionNumericalScale,
  [QUESTION_CHOICES]: QuestionChoices,
  [QUESTION_IMAGE]: QuestionImage,
  [QUESTION_RANK]: QuestionRank,
}

export default class QuestionEditor extends Component {

  onClickOptions = ({ key }) => { }

  render() {

    const { data, onChange, onRemove, onReset, collapsed } = this.props

    const options = (
      <Menu onClick={this.onClickOptions}>
        <Menu.Item key="1">Visible si</Menu.Item>
      </Menu>
    )

    const EditorComponent = dispatcher[data.type]

    return (
      <div>
        <Layout style={layoutStyle}>
          <Row>
            <Col span={18}>
              <div style={{ textAlign: 'center' }}>
                <h3>
                  <EditText value={data.title} onChange={title => onChange({ title })} size="large" placeholder="Question" />
                  <sup>
                    <Button type="dashed" onClick={() => onChange({ mandatory: !data.mandatory })} shape="circle" icon={data.mandatory ? 'star' : 'star-o'} size='small' />
                  </sup>
                </h3>
              </div>
            </Col>
            <Col span={4}>
              <Dropdown overlay={<QuestionMenu onClick={(type) => onReset(type)} />}>
                <Button shape="circle" type="secondary" icon="setting" size='large'>{typeToName()}</Button>
              </Dropdown>
              <Dropdown overlay={options}>
                <Button shape="circle" icon='ellipsis' size='large' />
              </Dropdown>
              <Button type="danger" onClick={() => this.removeItem()} shape="circle" icon='delete' size='large' />
            </Col>
          </Row>
          <Content style={{ textAlign: 'left', margin: 10, marginLeft: 50 }}>
            {!collapsed && <EditorComponent value={data} onChange={this.setItem} />}
          </Content>
        </Layout>
      </div>
    )
  }
}

QuestionEditor.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}
