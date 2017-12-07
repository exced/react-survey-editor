import React from 'react'
import SurveyEditor from './lib'

const App = () => (
  <SurveyEditor locale="frFR" onExport={(v) => console.tron.log(v, true)} />
)

export default App
