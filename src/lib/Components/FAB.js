import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Button, Icon } from 'antd'

const FAB = ({ onAdd, onUndo, onRedo, onExport, denormalize }) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={onAdd} shape="circle" icon="file-add" size='large' />
      </Menu.Item>
      <Menu.Item>
        <Button onClick={onUndo} shape="circle" icon="rollback" size='large' />
      </Menu.Item>
      <Menu.Item>
        <Button onClick={onRedo} shape="circle" size='large'>
          <Icon type="enter" style={{ transform: `rotate(180deg)` }} />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => onExport(denormalize())} shape="circle" icon="rocket" size='large' />
      </Menu.Item>
    </Menu>
  )
  return (
    <div>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button type="primary" shape="circle" icon="plus" size='large' />
      </Dropdown>
    </div>
  )
}

FAB.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
  denormalize: PropTypes.func.isRequired,
}

export default FAB
