import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Layout, Dropdown, Tooltip, Icon, Tag } from 'antd'
import QuestionMenu from '../Components/QuestionMenu'
import QuestionEditorItem from '../Components/QuestionEditorItem'
import { Handle } from '../Components/DragList'
import { EditText, UploadImage } from '../Components/EditFields'
import { typeToName } from '../Transforms/Editor'
import VisibleIfEditorQuestion from '../Containers/VisibleIfEditorQuestion'

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

export default class QuestionEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleIf: false,
    }
  }

  toggleVisibleIf = () => this.setState({ visibleIf: !this.state.visibleIf })

  render() {

    const { visibleIf } = this.state

    const {
      index,
      value,
      onChange,
      onRemove,
      onReset,
      collapsed,
      onToggleCollapsed,
           } = this.props
    return (
      <div>
        <Layout style={layoutStyle}>
          <Row style={{ padding: 10 }}>
            <Col span={2}><Handle /></Col>
            <Col span={4}><UploadImage value={value.image} onChange={image => onChange({ image })} /></Col>
            <Col span={2}><Tag color="gold">{`Question ${index + 1}`}</Tag></Col>
            <Col span={10} style={{ textAlign: 'center' }}>
              <h3>
                <Tooltip title={value.tooltip}>
                  <Icon type="question-circle-o" />
                </Tooltip>
                <EditText value={value.title} onChange={title => onChange({ title })} size="large" placeholder="Question" />
                <sup><Button type="dashed" onClick={() => onChange({ mandatory: !value.mandatory })} shape="circle" icon={value.mandatory ? 'star' : 'star-o'} size='small' /></sup>
              </h3>
            </Col>
            <Col span={6}>
              <Dropdown overlay={<QuestionMenu onClick={(type) => onReset(type)} />}>
                <Button shape="circle" type="secondary" icon="edit" size='large'>{typeToName()}</Button>
              </Dropdown>
              <Button onClick={this.toggleVisibleIf} shape="circle" icon={visibleIf ? 'eye' : 'eye-o'} size='large' />
              <Button onClick={onToggleCollapsed} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
              <Button type="danger" onClick={onRemove} shape="circle" icon='delete' size='large' />
            </Col>
          </Row>
          {!collapsed &&
            <Content style={{ textAlign: 'left', margin: 10, marginLeft: 50 }}>
              {visibleIf &&
                <VisibleIfEditorQuestion value={value} onChange={visibleIf => onChange({ visibleIf })} />
              }
              <QuestionEditorItem value={value} onChange={onChange} editable />
            </Content>
          }
        </Layout>
      </div>
    )
  }
}

QuestionEditor.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}
