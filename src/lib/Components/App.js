import React from 'react'
import { Layout, Affix, BackTop } from 'antd'
import FAB from '../Containers/FAB'
import SurveyEditor from '../Containers/SurveyEditor'

const { Content } = Layout

const App = () => (
  <div>
    <Layout style={{ margin: 20, position: 'relative' }}>
      <Affix style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <FAB />
      </Affix>
      <BackTop />
      <Content style={{ marginTop: 20 }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <SurveyEditor />
        </div>
      </Content>
    </Layout>
  </div>
)

export default App
