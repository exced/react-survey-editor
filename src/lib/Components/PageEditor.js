import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Layout, Dropdown, Menu } from 'antd'
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

  onClickOptions = ({ key }) => { }

  render() {

    const { data, onChange, onRemove, onAdd, collapsed } = this.props

    const options = (
      <Menu onClick={this.onClickOptions}>
        <Menu.Item key="1">Visible si</Menu.Item>
      </Menu>
    )

    return (
      <div>
        <Layout style={layoutStyle}>
          <Row>
            <Col span={20}>
              <div style={{ textAlign: 'center' }}>
                <h2>
                  <EditText value={data.title} onChange={title => onChange({ title })} size="large" placeholder="Page" />
                </h2>
              </div>
            </Col>
            <Col span={4}>
              <div style={{ padding: 10 }}>
                <Dropdown overlay={<QuestionMenu onClick={onAdd} />}>
                  <Button type="secondary" shape="circle" icon="plus" size='large' />
                </Dropdown>
                <Button onClick={this.toggle} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
                <Dropdown overlay={options}>
                  <Button shape="circle" icon='ellipsis' size='large' />
                </Dropdown>
                <Button type="danger" onClick={onRemove} shape="circle" icon='delete' size='large' />
              </div>
            </Col>
          </Row>
          <Content>
            <QuestionList data={data.questions} />
          </Content>
        </Layout>
      </div>
    )
  }
}

PageEditor.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
}