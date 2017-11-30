import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout, Menu, Icon, BackTop, Affix, Button } from 'antd'
import Editor from '../Components/Editor'
import EditorHeader from '../Components/EditorHeader'
import ToolBar from './ToolBar'
import FAB from './FAB'

const { Header, Footer, Sider, Content } = Layout

export class SurveyEditor extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {

    const { survey } = this.props

    return (
      <div>
        <Layout style={{ margin: 20 }}>
          <Header style={{ background: '#fff', padding: 0, position: 'relative' }}>
            <ToolBar />
            <Affix style={{ position: 'absolute', bottom: 20, right: 20 }}>
              <FAB />
            </Affix>
          </Header>
          <Content style={{ marginTop: 20 }}>
            <BackTop />
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <Editor survey={survey} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2017 Survey Editor
          </Footer>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  survey: state.editor.survey,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyEditor)
