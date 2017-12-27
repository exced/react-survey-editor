import React from 'react'
import { uniqueId } from 'lodash'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import store from './Store'

import SurveyEditor, { Types } from '../lib'

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

storiesOf('Survey Editor', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Default', () => <SurveyEditor onExport={(e) => { }} />)
  .add('Locale', () => <SurveyEditor locale="frFR" onExport={(e) => { }} />)
  .add('Initialized', () => <SurveyEditor initialValue={initialValue} onExport={(e) => { }} />)