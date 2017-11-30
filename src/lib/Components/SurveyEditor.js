import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Editor from './Editor'
import Survey from './Survey'

const { Header, Footer, Sider, Content } = Layout

export default class SurveyEditor extends Component {
  static propTypes = {
    survey: PropTypes.object.isRequired
  }

  render() {

    const { survey } = this.props

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Content>
            <Editor survey={survey} />
          </Content>
        </Layout>
      </div>
    )
  }
}
