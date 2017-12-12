import React from 'react'
import { Row, Col } from 'antd'

const Editable = (Item, Meta) => ({ value, onChange, editable }) => (
  editable ?
    <Row type="flex" align="bottom">
      <Col span={14}>
        <Item disabled value={value} onChange={() => { }} />
      </Col>
      <Col span={10} style={{textAlign: 'center'}}>
        <h3>Méta données</h3>
        <Meta value={value} onChange={onChange} editable={editable} />
      </Col>
    </Row>
    :
    <Item disabled={false} value={value} onChange={onChange} />
)

export default Editable
