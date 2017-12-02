import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout, Menu, Icon, BackTop, Affix, Button } from 'antd'
import ToolBar from './ToolBar'
import FAB from './FAB'
import { getPages } from '../Selectors/Editor'
import DragList from '../Components/DragList'
import PageEditor from './PageEditor'

const { Header, Footer, Sider, Content } = Layout

export class SurveyEditor extends Component {
  static propTypes = {
  }

  render() {

    const { pages } = this.props

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
              <DragList Component={PageEditor} data={pages} />
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
  pages: getPages(state),
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyEditor)
