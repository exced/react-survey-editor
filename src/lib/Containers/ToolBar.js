import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Layout } from 'antd'
import { ActionCreators as UndoRedo } from 'redux-undo'
import { addItem } from '../Actions/Editor'
import { getPages } from '../Selectors/Editor'
import {
  // Types
  PAGE,
  QUESTION_TEXT,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_IMAGE,
  QUESTION_RANK,
} from '../Types/Editor'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const { Sider } = Layout

class ToolBar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  onClick = ({ key }) => {

    const { addPage, pages } = this.props

    if (key === "addPage") {
      addPage(pages.length)
    }
  }

  render() {
    return (
      <Menu
        onClick={this.onClick}
        selectable={false}
        mode="horizontal"
        theme="light"
        inlineCollapsed={this.state.collapsed}
      >
        <Menu.Item key="addPage">
          <Icon type="plus-circle" />
          <span>Page</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Option 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="inbox" />
          <span>Option 3</span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  pages: getPages(state),
})

const mapDispatchToProps = dispatch => ({
  undo: () => dispatch(UndoRedo.undo()),
  redo: () => dispatch(UndoRedo.redo()),
  addPage: (index) => dispatch(addItem(PAGE, index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)
