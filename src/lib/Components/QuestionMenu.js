import React from 'react'
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
  QUESTION_RATE,
} from '../Types/Question'

const SubMenu = Menu.SubMenu

const QuestionMenu = ({ onClick }) => (
  <Menu onClick={({ key }) => onClick(key)}>
    <SubMenu title="Texte">
      <Menu.Item key={QUESTION_TEXT}>Court</Menu.Item>
      <Menu.Item key={QUESTION_TEXT_AREA}>Long</Menu.Item>
    </SubMenu>
    <Menu.Item key={QUESTION_DATE}>Date</Menu.Item>
    <SubMenu title="Échelle">
      <Menu.Item key={QUESTION_DISCRETE_SCALE}>Discrète</Menu.Item>
      <Menu.Item key={QUESTION_NUMERICAL_SCALE}>Numérique</Menu.Item>
    </SubMenu>
    <SubMenu title="Choix">
      <Menu.Item key={QUESTION_CHOICES}>Liste</Menu.Item>
      <Menu.Item key={QUESTION_MATRIX}>Matrice</Menu.Item>
    </SubMenu>
    <Menu.Item key={QUESTION_IMAGE}>Image</Menu.Item>
    <Menu.Item key={QUESTION_RANK}>Classement</Menu.Item>
    <Menu.Item key={QUESTION_RATE}>Note</Menu.Item>
  </Menu>
)

QuestionMenu.propTypes = {
  onClick: PropTypes.func,
}

QuestionMenu.defaultProps = {
  onClick: () => { }
}

export default QuestionMenu