import React from 'react'
import PropTypes from 'prop-types'
import { Layout, BackTop} from 'antd'
import FAB from '../Containers/FAB'
import SurveyEditor from '../Containers/SurveyEditor'

const { Content } = Layout

const App = ({ value, onExport }) => (
  <div>
    <Layout style={{ minHeight: '100vh' }}>
      <BackTop />
      <div style={{ position: 'fixed', bottom: 30, right: 30 }}>
        <FAB value={value} onExport={onExport} />
      </div>
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