import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Button, Dropdown } from 'antd'

const iconStyle = {
  fontSize: 20,
}

const titleStyle = {
  fontSize: 14,
}


const FAB = ({ onUndo, onRedo, onExport }) => {

  const onClick = ({ key }) => {
    switch (key) {
      case "onUndo":
        return onUndo()
      case "onRedo":
        return onRedo()
      case "onExport":
        return onExport()
      default:
        return
    }
  }

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="onUndo">
        <Icon type="rollback" style={iconStyle} />
        <span style={titleStyle}>Undo</span>
      </Menu.Item>
      <Menu.Item key="onRedo">
        <Icon type="enter" style={{ ...iconStyle, transform: `rotate(180deg)` }} />
        <span style={titleStyle}>Redo</span>
      </Menu.Item>
      <Menu.Item key="onExport">
        <Icon type="save" style={iconStyle} />
        <span style={titleStyle}>Sauvegarder</span>
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
}

export default FAB
