import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Button, Dropdown } from 'antd'

const FAB = ({ onUndo, onRedo, onExport, denormalize }) => {

  const menu = (
    <Menu>
      <Menu.Item key="onUndo">
        <Button type="primary" onClick={onUndo} shape="circle" icon="rollback" size='large' />
      </Menu.Item>
      <Menu.Item key="onRedo">
        <Button type="primary" onClick={onRedo} shape="circle" size='large'>
          <Icon type="enter" style={{ transform: `rotate(180deg)` }} />
        </Button>
      </Menu.Item>
      <Menu.Item key="onExport">
        <Button type="primary" onClick={() => onExport(denormalize())} shape="circle" icon="save" size='large' />
      </Menu.Item>
    </Menu>
  )

  return (
    <div>
      <Dropdown overlay={menu} placement="topCenter">
        <Button type="primary" shape="circle" icon="plus" size='large' />
      </Dropdown>
    </div>
  )
}


FAB.propTypes = {
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
  denormalize: PropTypes.func.isRequired,
}

export default FAB
