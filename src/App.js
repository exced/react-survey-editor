import React, { Component } from 'react'
import SurveyEditor from './lib'

class App extends Component {
  render() {
    return (
      <SurveyEditor onExport={(v) => console.tron.log(v, true)} />
    )
  }
}

export default App
