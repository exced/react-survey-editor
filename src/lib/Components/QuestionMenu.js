import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import {
  QUESTION_TEXT,
  QUESTION_TEXT_AREA,
  QUESTION_DATE,
  QUESTION_DISCRETE_SCALE,
  QUESTION_NUMERICAL_SCALE,
  QUESTION_CHOICES,
  QUESTION_MATRIX,
  QUESTION_IMAGE,
  QUESTION_RANK,
} from '../Types/Editor'

const SubMenu = Menu.SubMenu

const QuestionMenu = ({ onClick }) => {

  const onClickType = ({ key }) => {
    const type = ({
      "1.1": QUESTION_TEXT,
      "1.2": QUESTION_TEXT_AREA,
      "2": QUESTION_DATE,
      "3.1": QUESTION_DISCRETE_SCALE,
      "3.2": QUESTION_NUMERICAL_SCALE,
      "4.1": QUESTION_CHOICES,
      "4.2": QUESTION_MATRIX,
      "5": QUESTION_IMAGE,
      "6": QUESTION_RANK,
    })[key]
    if (type) {
      onClick(type)
    }
  }

  return (
    <Menu onClick={onClickType}>
      <SubMenu title="Texte">
        <Menu.Item key="1.1">Court</Menu.Item>
        <Menu.Item key="1.2">Long</Menu.Item>
      </SubMenu>
      <Menu.Item key="2">Date</Menu.Item>
      <SubMenu title="Échelle">
        <Menu.Item key="3.1">Discrète</Menu.Item>
        <Menu.Item key="3.2">Numérique</Menu.Item>
      </SubMenu>
      <SubMenu title="Choix">
        <Menu.Item key="4.1">Liste</Menu.Item>
        <Menu.Item key="4.2">Matrice</Menu.Item>
      </SubMenu>
      <Menu.Item key="5">Image</Menu.Item>
      <Menu.Item key="6">Classement</Menu.Item>
    </Menu>
  )
}

export default QuestionMenu