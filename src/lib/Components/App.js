import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, BackTop } from 'antd'
import SiderMenu from '../Containers/SiderMenu'
import SurveyEditor from '../Containers/SurveyEditor'

const { Content, Sider } = Layout

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  toggleCollapsed = () => this.setState({ collapsed: !this.state.collapsed })

  render() {

    const { collapsed } = this.state

    const { value, onExport } = this.props

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <BackTop />
          <Sider collapsible trigger={null} collapsed={collapsed} style={{ height: '100%', position: 'fixed', left: 0 }}>
            <div style={{ height: 32, background: 'rgba(255, 255, 255, .2)', margin: 16 }} />
            <SiderMenu value={value} onExport={onExport} collapsed={collapsed} onCollapse={this.toggleCollapsed} />
          </Sider>
          <Layout style={{ marginLeft: collapsed ? 60 : 200, transition: "all 0.3s" }}>
            <Content>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <SurveyEditor value={value} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

App.propTypes = {
  value: PropTypes.object.isRequired,
  onExport: PropTypes.func.isRequired,
}