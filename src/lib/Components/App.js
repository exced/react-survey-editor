import React from 'react'
import { Layout, Affix, BackTop } from 'antd'
import FAB from '../Containers/FAB'
import SurveyEditor from '../Containers/SurveyEditor'

const { Content } = Layout

const App = ({ item }) => (
  <div>
    <Layout>
      <Affix style={{ position: 'absolute', bottom: 30, right: 30 }}>
        <FAB item={item} />
      </Affix>
      <BackTop />
      <Content>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <SurveyEditor item={item} />
        </div>
      </Content>
    </Layout>
  </div>
)

export default App
