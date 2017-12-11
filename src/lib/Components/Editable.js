import React from 'react'
import { Row, Col } from 'antd'

const Editable = (Item, Meta) => ({ value, onChange, editable }) => (
  editable ?
    <Row type="flex" align="bottom">
      <Col span={16}>
        <Item disabled value={value} onChange={() => { }} />
      </Col>
      <Col span={8}>
        <h3>Méta données</h3>
        <Meta />
      </Col>
    </Row>
    :
    <Item disabled={false} value={value} onChange={onChange} />
)

export default Editable
