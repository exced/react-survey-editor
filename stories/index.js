import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import store from './Store'

import SurveyEditor, { Types } from '../lib'

const initialValue = {
  id: 1,
  title: 'My Survey',
  description: 'Introduction survey',
  responseTime: "",
  active: false,
  dates: [],
  password: "ThisIsASecretPassword",
  link: "link",
  image: '',
  pages: [
    {
      id: 1,
      title: 'First Page',
      image: '',
      visibleIf: 'true',
      questions: [
        {
          id: 1,
          type: Types.QUESTION_SWITCH,
          title: 'Question switch',
          image: '',
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
          image: '',
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
      image: '',
      visibleIf: 'true',
      questions: [
        {
          id: 3,
          type: Types.QUESTION_RATE,
          title: 'Question rate',
          image: '',
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
          image: '',
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

storiesOf('Survey Editor', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Default', () => <SurveyEditor onExport={(e) => { }} />)
  .add('Locale', () => <SurveyEditor locale="frFR" onExport={(e) => { }} />)
  .add('Initialized', () => <SurveyEditor initialValue={initialValue} onExport={(e) => { }} />)