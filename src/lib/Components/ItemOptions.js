import React from 'react'
import { Menu, Dropdown, Button } from 'antd'

const onClickOptions = ({ key }) => { }

const options = (
  <Menu onClick={onClickOptions}>
    <Menu.Item key="1">Visible si</Menu.Item>
  </Menu>
)

const ItemOptions = ({ onChange }) => (
  <Dropdown overlay={options}>
    <Button shape="circle" icon='ellipsis' size='large' />
  </Dropdown>
)

export default ItemOptions