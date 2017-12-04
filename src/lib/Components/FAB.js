import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Button } from 'antd'

const FAB = ({ onAdd, onUndo, onRedo }) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={onAdd} shape="circle" icon="file-add" size='large' />
      </Menu.Item>
      <Menu.Item>
        <Button onClick={onUndo} shape="circle" icon="backward" size='large' />
      </Menu.Item>
      <Menu.Item>
        <Button onClick={onRedo} shape="circle" icon="forward" size='large' />
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
}

export default FAB
