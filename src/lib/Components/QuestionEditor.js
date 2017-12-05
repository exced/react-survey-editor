import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Layout, Dropdown, Tooltip, Icon } from 'antd'
import {
  QUESTION_TEXT,
  QUESTION_TEXT_AREA,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
  QUESTION_MATRIX,
  QUESTION_CASCADE,
} from '../Types/Question'
import QuestionText from './QuestionText'
import QuestionTextArea from './QuestionTextArea'
import QuestionDate from './QuestionDate'
import QuestionDiscreteScale from './QuestionDiscreteScale'
import QuestionNumericalScale from './QuestionNumericalScale'
import QuestionChoices from './QuestionChoices'
import QuestionImage from './QuestionImage'
import QuestionRank from './QuestionRank'
import QuestionMatrix from './QuestionMatrix'
import { Handle } from '../Components/DragList'
import QuestionMenu from '../Components/QuestionMenu'
import QuestionCascade from '../Components/QuestionCascade'
import { typeToName } from '../Transforms/Editor'
import { EditText } from '../Components/EditFields'

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

const node = (type) => ({
  [QUESTION_TEXT]: QuestionText,
  [QUESTION_TEXT_AREA]: QuestionTextArea,
  [QUESTION_DATE]: QuestionDate,
  [QUESTION_DISCRETE_SCALE]: QuestionDiscreteScale,
  [QUESTION_NUMERICAL_SCALE]: QuestionNumericalScale,
  [QUESTION_CHOICES]: QuestionChoices,
  [QUESTION_MATRIX]: QuestionMatrix,
  [QUESTION_IMAGE]: QuestionImage,
  [QUESTION_RANK]: QuestionRank,
  [QUESTION_CASCADE]: QuestionCascade,
})[type]

export default class QuestionEditor extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      visibleMode: false,
    }
  }

  toggleVisibleMode = () => this.setState({ visibleMode: !this.state.visibleMode })

  render() {
    const { visibleMode } = this.state
    const { item, onChange, onRemove, onReset, collapsed } = this.props
    const Node = node(item.type)
    return (
      <div>
        <Layout style={layoutStyle}>
          <Row style={{ padding: 10 }}>
            <Col span={2}>
              <Handle />
            </Col>
            <Col span={18}>
              <div style={{ textAlign: 'center' }}>
                <h3>
                  <Tooltip title={item.tooltip}>
                    <Icon type="question-circle-o" />
                  </Tooltip>
                  <EditText value={item.title} onChange={title => onChange({ title })} size="large" placeholder="Question" />
                  <sup>
                    <Button type="dashed" onClick={() => onChange({ mandatory: !item.mandatory })} shape="circle" icon={item.mandatory ? 'star' : 'star-o'} size='small' />
                  </sup>
                </h3>
              </div>
            </Col>
            <Col span={4}>
              <Dropdown overlay={<QuestionMenu onClick={(type) => onReset(type)} />}>
                <Button shape="circle" type="secondary" icon="setting" size='large'>{typeToName()}</Button>
              </Dropdown>
              <Button onClick={this.toggleVisibleMode} shape="circle" icon={visibleMode ? 'eye' : 'eye-o'} size='large' />
              <Button type="danger" onClick={onRemove} shape="circle" icon='delete' size='large' />
            </Col>
          </Row>
          <Content style={{ textAlign: 'left', margin: 10, marginLeft: 50 }}>
            {!collapsed && <Node value={item} onChange={onChange} />}
          </Content>
        </Layout>
      </div>
    )
  }
}

QuestionEditor.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}
