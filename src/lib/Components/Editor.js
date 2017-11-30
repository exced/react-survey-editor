import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageList from './PageList'

import style from './Styles/Editor.css'

export default class Editor extends Component {

  static propTypes = {
    survey: PropTypes.object.isRequired,
  }

  render() {

    const { survey } = this.props

    return (
      <div>
        <PageList data={survey.pages} />
      </div>
    )
  }
}
