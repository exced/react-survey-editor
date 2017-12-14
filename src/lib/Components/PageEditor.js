import React, { Component } from 'react'
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

export default class PageEditor extends Component {
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
      onAdd,
      onMove,
      collapsed,
      onToggleCollapsed,
           } = this.props

    return (
      <div>
        <Layout style={layoutStyle}>
          <Row style={{ padding: 10 }}>
            <Col span={2}><Handle /></Col>
            <Col span={2}><Tag color="blue">{`Page ${index + 1}`}</Tag></Col>
            <Col span={14} style={{ textAlign: 'center' }}>
              <h2><EditText value={value.title} onChange={title => onChange({ title })} size="large" placeholder="Page" /></h2>
            </Col>
            <Col span={6}>
              <Dropdown overlay={<QuestionMenu onClick={onAdd} />}>
                <Button type="secondary" shape="circle" icon="plus" size='large' />
              </Dropdown>
              <Button onClick={this.toggleVisibleIf} shape="circle" icon={visibleIf ? 'eye' : 'eye-o'} size='large' />
              <Button onClick={onToggleCollapsed} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
              <Button type="danger" onClick={onRemove} shape="circle" icon='delete' size='large' />
            </Col>
          </Row>
          {!collapsed &&
            <Content style={{ textAlign: 'left', margin: 10, marginLeft: 50 }}>
              {visibleIf &&
                <VisibleIfEditorPage value={value} onChange={visibleIf => onChange({ visibleIf })} />
              }
              <QuestionList parent={value} data={value.questions} onMove={onMove} />
            </Content>
          }
        </Layout>
      </div>
    )
  }
}

PageEditor.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
}
