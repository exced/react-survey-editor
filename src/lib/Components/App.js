import React from 'react'
import PropTypes from 'prop-types'
import { Layout, BackTop } from 'antd'
import SiderMenu from '../Containers/SiderMenu'
import SurveyEditor from '../Containers/SurveyEditor'

const { Content } = Layout

const App = ({ item, onExport }) => (
  <div>
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu item={item} onExport={onExport} />
      <BackTop />
      <Content>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <SurveyEditor item={item} />
        </div>
      </Content>
    </Layout>
  </div>
)

App.propTypes = {
  item: PropTypes.object.isRequired,
  onExport: PropTypes.func.isRequired,
}

export default App