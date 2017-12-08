import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col, Form, Switch, DatePicker, TimePicker, Input } from 'antd'
import { EditText } from '../Components/EditFields'
import PageList from '../Components/PageList'
import moment from 'moment'

const FormItem = Form.Item
const { RangePicker } = DatePicker

const layoutStyle = {
  margin: 20,
  background: '#f7f7f7',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#f7f7f7',
  overflow: 'hidden',
}

const SurveyEditor = ({ value, onChange, onMove, visibleIf, collapsed, onToggleCollapsed }) => {

  return (
    <div>
      <div style={layoutStyle}>
        <Row style={{ padding: 10 }}>
          <Col span={2}></Col>
          <Col span={18} style={{ textAlign: 'center' }}>
            <h2>
              <EditText value={value.title} onChange={title => onChange({ title })} size="large" placeholder="Questionnaire" />
              <sup><span style={{ border: '0.5px solid #ff0059', borderRadius: 6, padding: 3, color: '#ff0059' }}>{value.link}</span></sup>
            </h2>
            <h3>
              <EditText value={value.description} onChange={description => onChange({ description })} size="large" placeholder="Description" />
            </h3>
          </Col>
          <Col span={4}>
            <Button onClick={onToggleCollapsed} shape="circle" icon={collapsed ? 'down' : 'up'} size='large' />
          </Col>
        </Row>
        {!collapsed &&
          <Row type="flex" align="bottom">
            <Col span={16}>
            </Col>
            <Col span={8}>
              <div>
                <h3>Méta données</h3>
                <FormItem label="Temps de réponse">
                  <TimePicker placeholder="Durée" format="mm:ss" onChange={(m, responseTime) => onChange({ responseTime })} defaultOpenValue={moment('00:00', 'mm:ss')} />
                </FormItem>
                <FormItem label="Actif">
                  <Switch onChange={active => onChange({ active })} defaultChecked={value.active} checkedChildren="actif" unCheckedChildren="inactif" />
                </FormItem>
                {value.active &&
                  <FormItem label="Activation">
                    <RangePicker defaultValue={value.dates} placeholder={["Début", "Fin"]} onChange={(m, dates) => onChange({ dates })} />
                  </FormItem>}
                <FormItem label="Mot de passe">
                  <Input defaultValue={value.password} placeholder={"Mot de passe"} onChange={e => onChange({ password: e.target.value })} style={{ width: 'auto' }} />
                </FormItem>
              </div>
            </Col>
          </Row>
        }
      </div>
      <PageList parent={value} data={value.pages} onMove={onMove} />
    </div>
  )
}


SurveyEditor.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  onToggleCollapsed: PropTypes.func.isRequired,
}

export default SurveyEditor