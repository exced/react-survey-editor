import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Button } from 'antd'
import { ActionCreators as UndoRedo } from 'redux-undo'
import { addPage } from '../Actions/Editor'

class FAB extends Component {

  render() {

    const {
      undo,
      redo,
      addPage
      } = this.props

    const menu = (
      <Menu>
        <Menu.Item>
          <Button onClick={undo} shape="circle" icon="backward" size='large' />
        </Menu.Item>
        <Menu.Item>
          <Button onClick={redo} shape="circle" icon="forward" size='large' />
        </Menu.Item>
        <Menu.Item>
          <Button onClick={addPage} shape="circle" icon="file-add" size='large' />
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
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = dispatch => ({
  undo: () => dispatch(UndoRedo.undo()),
  redo: () => dispatch(UndoRedo.redo()),
  addPage: () => dispatch(addPage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FAB)

