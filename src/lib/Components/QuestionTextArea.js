import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Form, Switch } from 'antd'

const FormItem = Form.Item

export const Item = ({ disabled, value, onChange }) => (
  <Input.TextArea disabled placeholder="Réponse longue" autosize />
)

class Meta extends Component {
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
      <Row type="flex" align="bottom">
        <Col span={16}>
          <Item disabled value={value} onChange={onChange} />
        </Col>
        <Col span={8}>
          <h3>Méta données</h3>
          <FormItem label="taille auto">
            <Switch />
          </FormItem>
        </Col>
      </Row>
    )
  }
}

Meta.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Meta