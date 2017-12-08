import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Layout, Dropdown } from 'antd'
import { Handle } from '../Components/DragList'
import { EditText } from '../Components/EditFields'
import QuestionMenu from '../Components/QuestionMenu'
import QuestionList from '../Components/QuestionList'
import VisibleIfEditor from '../Containers/VisibleIfEditor'

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
  value,
  onChange,
  onRemove,
  onAdd,
  onMove,
  visibleIf,
  onToggleVisibleIf,
  collapsed,
  onToggleCollapsed,
       }) => {

  if (visibleIf) {
    return (
      <div>
        <Layout style={layoutStyle}>
          <Row style={{ padding: 10 }}>
            <Col span={2}></Col>
            <Col span={18} style={{ textAlign: 'center' }}>
              <h2><EditText value={value.title} onChange={title => onChange({ title })} size="large" placeholder="Page" /></h2>
            </Col>
            <Col span={4}>
              <Dropdown overlay={<QuestionMenu onClick={onAdd} />}>
                <Button type="secondary" shape="circle" icon="plus" size='large' />
              </Dropdown>
              <Button onClick={onToggleCollapsed} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
              <Button onClick={onToggleVisibleIf} shape="circle" icon={visibleIf ? 'eye' : 'eye-o'} size='large' />
            </Col>
          </Row>
          {!collapsed &&
            <Content>
              <VisibleIfEditor value={value} onChange={visibleIf => onChange({ visibleIf })} />
              <QuestionList parent={value} data={value.questions} onMove={onMove} />
            </Content>
          }
        </Layout>
      </div>
    )
  }

  return (
    <div>
      <Layout style={layoutStyle}>
        <Row style={{ padding: 10 }}>
          <Col span={2}><Handle /></Col>
          <Col span={18} style={{ textAlign: 'center' }}>
            <h2><EditText value={value.title} onChange={title => onChange({ title })} size="large" placeholder="Page" /></h2>
          </Col>
          <Col span={4}>
            <Dropdown overlay={<QuestionMenu onClick={onAdd} />}>
              <Button type="secondary" shape="circle" icon="plus" size='large' />
            </Dropdown>
            <Button onClick={onToggleCollapsed} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
            <Button onClick={onToggleVisibleIf} shape="circle" icon={visibleIf ? 'eye' : 'eye-o'} size='large' />
            <Button type="danger" onClick={onRemove} shape="circle" icon='delete' size='large' />
          </Col>
        </Row>
        {!collapsed &&
          <Content>
            <QuestionList parent={value} data={value.questions} onMove={onMove} />
          </Content>
        }
      </Layout>
    </div>
  )
}

PageEditor.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
}

export default PageEditor
