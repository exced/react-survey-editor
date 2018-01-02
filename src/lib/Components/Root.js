import React, { Component } from 'react'
import Init from '../Containers/Init'

export default class Root extends Component {

  onExport = () => this.app.wrappedInstance.onExport()

  render() {
    return (
      <Init ref={ref => this.app = ref} {...this.props} />
    )
  }
}
