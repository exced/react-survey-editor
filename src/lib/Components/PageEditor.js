import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Layout, Dropdown, Tag } from 'antd'
import { Handle } from '../Components/DragList'
import { EditText } from '../Components/EditFields'
import QuestionMenu from '../Components/QuestionMenu'
import QuestionList from '../Components/QuestionList'
import VisibleIfEditorPage from '../Containers/VisibleIfEditorPage'

const { Content } = Layout

const layoutStyle = {
  background: '#e8e5e5',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#e8e5e5',
  overflow: 'hidden',
}

const PageEditor = ({
  index,
  value,
  onChange,
  onRemove,
  onAdd,
  onMove,
  collapsed,
  onToggleCollapsed,
       }) => (
    <div>
      <Layout style={layoutStyle}>
        <Row style={{ padding: 10 }}>
          <Col span={2}><Handle /></Col>
          <Col span={2}><Tag color="blue">{`Page ${index}`}</Tag></Col>
          <Col span={16} style={{ textAlign: 'center' }}>
            <h2><EditText value={value.title} onChange={title => onChange({ title })} size="large" placeholder="Page" /></h2>
          </Col>
          <Col span={4}>
            <Dropdown overlay={<QuestionMenu onClick={onAdd} />}>
              <Button type="secondary" shape="circle" icon="plus" size='large' />
            </Dropdown>
            <Button onClick={onToggleCollapsed} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
            <Button type="danger" onClick={onRemove} shape="circle" icon='delete' size='large' />
          </Col>
        </Row>
        {!collapsed &&
          <Content style={{ textAlign: 'left', margin: 10, marginLeft: 50 }}>
            <VisibleIfEditorPage value={value} onChange={visibleIf => onChange({ visibleIf })} />
            <QuestionList parent={value} data={value.questions} onMove={onMove} />
          </Content>
        }
      </Layout>
    </div>
  )

PageEditor.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
}

export default PageEditor
