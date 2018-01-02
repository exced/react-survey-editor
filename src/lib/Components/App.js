import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, BackTop } from 'antd'
import FAB from '../Containers/FAB'
import SurveyEditor from '../Containers/SurveyEditor'

const { Content } = Layout

export default class App extends Component {

  onExport = () => this.props.denormalize()

  render() {
    const { value } = this.props
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <BackTop />
          <div style={{ zIndex: 9999, position: 'fixed', bottom: 30, right: 30 }}>
            <FAB value={value} onExport={() => this.props.onExport(this.props.denormalize())} />
          </div>
          <Content>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <SurveyEditor value={value} />
            </div>
          </Content>
        </Layout>
      </div>
    )
  }
}

App.propTypes = {
  value: PropTypes.object.isRequired,
  onExport: PropTypes.func.isRequired,
  denormalize: PropTypes.func.isRequired,
}
