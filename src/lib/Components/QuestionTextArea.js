import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Form, Switch } from 'antd'
import Editable from '../Components/Editable'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
}

export const Item = ({ disabled, value, onChange }) => (
  <Input.TextArea disabled placeholder="Réponse longue" autosize />
)

export class Meta extends Component {
  constructor(props) {
    super(props)
    this.state = {
      autosize: true,
    }
  }

  toggle = () => this.setState({ autosize: !this.state.autosize })

  render() {

    const { onChange, value } = this.props

    return (
      <div>
        <FormItem label="taille auto" {...formItemLayout}>
          <Switch />
        </FormItem>
        <FormItem label="Indications" {...formItemLayout}>
          <Input value={value.tooltip} onChange={e => onChange({ tooltip: e.target.value })} placeholder="Indications" size="small" style={{ width: 'auto' }} />
        </FormItem>
      </div>
    )
  }
}

const Default = (props) => Editable(Item, Meta)(props)

Default.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  editable: PropTypes.bool,
}

Default.defaultProps = {
  editable: true
}

export default Default