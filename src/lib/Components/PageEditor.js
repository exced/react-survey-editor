import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Layout, Dropdown } from 'antd'
import { Handle } from '../Components/DragList'
import { EditText } from '../Components/EditFields'
import QuestionMenu from '../Components/QuestionMenu'
import QuestionList from '../Containers/QuestionList'

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
      collapsed: false,
    }
  }

  toggle = () => this.setState({ collapsed: !this.state.collapsed })

  render() {

    const { collapsed } = this.state

    const { item, onChange, onRemove, onAdd } = this.props

    return (
      <div>
        <Layout style={layoutStyle}>
          <Row style={{ padding: 10 }}>
            <Col span={2}>
              <Handle />
            </Col>
            <Col span={18}>
              <div style={{ textAlign: 'center' }}>
                <h2>
                  <EditText value={item.title} onChange={title => onChange({ title })} size="large" placeholder="Page" />
                </h2>
              </div>
            </Col>
            <Col span={4}>
              <Dropdown overlay={<QuestionMenu onClick={onAdd} />}>
                <Button type="secondary" shape="circle" icon="plus" size='large' />
              </Dropdown>
              <Button onClick={this.toggle} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
              <Button type="danger" onClick={onRemove} shape="circle" icon='delete' size='large' />
            </Col>
          </Row>
          <Content>
            <QuestionList collapsed={collapsed} parent={item} data={item.questions} />
          </Content>
        </Layout>
      </div>
    )
  }
}

PageEditor.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
}