import React from 'react'
import PropTypes from 'prop-types'
import { Layout, BackTop } from 'antd'
import SiderMenu from '../Containers/SiderMenu'
import SurveyEditor from '../Containers/SurveyEditor'

const { Content } = Layout

const App = ({ value, onExport }) => (
  <div>
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu value={value} onExport={onExport} />
      <BackTop />
      <Content>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <SurveyEditor value={value} />
        </div>
      </Content>
    </Layout>
  </div>
)

App.propTypes = {
  value: PropTypes.object.isRequired,
  onExport: PropTypes.func.isRequired,
}

export default App