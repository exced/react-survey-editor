import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Layout } from 'antd'

const { Sider } = Layout

const iconStyle = {
  fontSize: 20,
}

const titleStyle = {
  fontSize: 14,
}

export default class SiderMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  toggleCollapsed = () => this.setState({ collapsed: !this.state.collapsed })

  render() {

    const { collapsed } = this.state

    const { onAdd, onUndo, onRedo, onExport, denormalize } = this.props

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
          return this.toggleCollapsed()
        default:
          return
      }
    }

    return (
      <Sider collapsible trigger={null} collapsed={collapsed} onCollapse={this.toggleCollapsed} style={{ position: 'relative' }}>
        <div style={{ height: 32, background: 'rgba(255, 255, 255, .2)', margin: 16 }} />
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
      </Sider>
    )
  }
}

SiderMenu.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
  denormalize: PropTypes.func.isRequired,
}
