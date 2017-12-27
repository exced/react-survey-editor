import React from 'react'
import SurveyEditor, { Types } from './lib'
import { uniqueId } from 'lodash'

const initialValue = {
  id: uniqueId(),
  title: 'My Survey',
  description: 'Introduction survey',
  responseTime: "",
  active: false,
  dates: [],
  password: "ThisIsASecretPassword",
  link: "link",
  image: "defaultPhoto.png",
  pages: [
    {
      id: uniqueId(),
      title: 'First Page',
      visibleIf: 'true',
      questions: [
        {
          id: uniqueId(),
          type: Types.QUESTION_SWITCH,
          title: 'Question switch',
          mandatory: false,
          visibleIf: 'true',
          tooltip: 'Question switch tooltip',
          checkedChildren: 'Yes',
          unCheckedChildren: 'No',
        },
        {
          id: uniqueId(),
          type: Types.QUESTION_TEXT,
          title: 'Question text',
          mandatory: true,
          visibleIf: 'true',
          tooltip: 'Question text tooltip',
        },
      ],
    },
    {
      id: uniqueId(),
      title: 'Second Page',
      visibleIf: 'true',
      questions: [
        {
          id: uniqueId(),
          type: Types.QUESTION_RATE,
          title: 'Question rate',
          mandatory: false,
          visibleIf: 'true',
          tooltip: 'Question rate tooltip',
          max: 5,
        },
        {
          id: uniqueId(),
          type: Types.QUESTION_CHOICES,
          title: 'Question choices',
          mandatory: true,
          visibleIf: 'true',
          choices: [
            "Choice 1", "Choice 2", "Choice 3"
          ],
          max: 1,
        },
      ],
    },
  ],
}

const App = () => (
  <SurveyEditor initialValue={initialValue} locale="frFR" onExport={(v) => console.tron.log(v, true)} />
)

export default App
