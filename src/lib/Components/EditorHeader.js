import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'antd';

export default class EditorHeader extends Component {
  static propTypes = {
    onAddQuestion: PropTypes.func,
    onUndo: PropTypes.func,
    onRedo: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Button type="secondary" icon="download" size="large"
        >
          Page
        </Button>
        <Button type="secondary" icon="download" size="large">
          Download
        </Button>
        <Button type="secondary" icon="download" size="large">
          Download
        </Button>
      </div>
    )
  }
}
