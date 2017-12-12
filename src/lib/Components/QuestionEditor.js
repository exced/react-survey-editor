import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Layout, Dropdown, Tooltip, Icon, Tag } from 'antd'
import QuestionMenu from '../Components/QuestionMenu'
import QuestionEditorItem from '../Components/QuestionEditorItem'
import { Handle } from '../Components/DragList'
import { EditText } from '../Components/EditFields'
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

const QuestionEditor = ({
  index,
  value,
  onChange,
  onRemove,
  onReset,
  collapsed,
  onToggleCollapsed,
       }) => (
    <div>
      <Layout style={layoutStyle}>
        <Row style={{ padding: 10 }}>
          <Col span={2}><Handle /></Col>
          <Col span={2}><Tag color="gold">{`Question ${index}`}</Tag></Col>
          <Col span={16} style={{ textAlign: 'center' }}>
            <h3>
              <Tooltip title={value.tooltip}>
                <Icon type="question-circle-o" />
              </Tooltip>
              <EditText value={value.title} onChange={title => onChange({ title })} size="large" placeholder="Question" />
              <sup><Button type="dashed" onClick={() => onChange({ mandatory: !value.mandatory })} shape="circle" icon={value.mandatory ? 'star' : 'star-o'} size='small' /></sup>
            </h3>
          </Col>
          <Col span={4}>
            <Dropdown overlay={<QuestionMenu onClick={(type) => onReset(type)} />}>
              <Button shape="circle" type="secondary" icon="rollback" size='large'>{typeToName()}</Button>
            </Dropdown>
            <Button onClick={onToggleCollapsed} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
            <Button type="danger" onClick={onRemove} shape="circle" icon='delete' size='large' />
          </Col>
        </Row>
        {!collapsed &&
          <Content style={{ textAlign: 'left', margin: 10, marginLeft: 50 }}>
            <VisibleIfEditorQuestion value={value} onChange={visibleIf => onChange({ visibleIf })} />
            <QuestionEditorItem value={value} onChange={onChange} editable />
          </Content>
        }
      </Layout>
    </div>
  )

QuestionEditor.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}

export default QuestionEditor 
