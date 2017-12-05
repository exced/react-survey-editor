import React from 'react'

import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import store from './Store'

import SurveyEditor from '../lib'

storiesOf('Survey Editor', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Default', () => <SurveyEditor />)