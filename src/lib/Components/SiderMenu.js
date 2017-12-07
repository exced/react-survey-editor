import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'

const iconStyle = {
  fontSize: 20,
}

const titleStyle = {
  fontSize: 14,
}

const SiderMenu = ({ onAdd, onUndo, onRedo, onExport, denormalize, collapsed, onCollapse }) => {

  const onClick = ({ key }) => {
    switch (key) {
      case "onAdd":
        return onAdd()
      case "onUndo":
        return onUndo()
      case "onRedo":
        return onRedo()
      case "onExport":
        return onExport(denormalize())
      case "onToggle":
        return onCollapse()
      default:
        return
    }
  }

  return (
    <Menu theme="dark" selectable={false} onClick={onClick} inlineCollapsed={collapsed}>
      <Menu.Item key="onAdd">
        <Icon type="file-add" style={iconStyle} />
        <span style={titleStyle}>Ajouter Page</span>
      </Menu.Item>
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
      <Menu.Item style={{ position: 'absolute', bottom: 0 }} key="onToggle">
        <Icon type={collapsed ? 'right' : 'left'} style={iconStyle} />
      </Menu.Item>
    </Menu>
  )
}


SiderMenu.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
  denormalize: PropTypes.func.isRequired,
}

export default SiderMenu
