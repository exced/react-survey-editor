import React from 'react'
import SurveyEditor, { Types } from './lib'

const initialValue = {
  id: 1,
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
      id: 1,
      title: 'First Page',
      visibleIf: 'true',
      questions: [
        {
          id: 1,
          type: Types.QUESTION_SWITCH,
          title: 'Question switch',
          mandatory: false,
          visibleIf: 'true',
          tooltip: 'Question switch tooltip',
          checkedChildren: 'Yes',
          unCheckedChildren: 'No',
          pageId: 1,
        },
        {
          id: 2,
          type: Types.QUESTION_TEXT,
          title: 'Question text',
          mandatory: true,
          visibleIf: 'true',
          tooltip: 'Question text tooltip',
          pageId: 1,
        },
      ],
    },
    {
      id: 2,
      title: 'Second Page',
      visibleIf: 'true',
      questions: [
        {
          id: 3,
          type: Types.QUESTION_RATE,
          title: 'Question rate',
          mandatory: false,
          visibleIf: 'true',
          tooltip: 'Question rate tooltip',
          max: 5,
          pageId: 2,
        },
        {
          id: 4,
          type: Types.QUESTION_CHOICES,
          title: 'Question choices',
          mandatory: true,
          visibleIf: 'true',
          tooltip: 'Question rate choices',
          choices: [
            "Choice 1", "Choice 2", "Choice 3"
          ],
          max: 1,
          pageId: 2,
        },
      ],
    },
  ],
}

const App = () => (
  <SurveyEditor initialValue={initialValue} locale="enUS" onExport={(v) => console.tron.log(v, true)} />
)

export default App
