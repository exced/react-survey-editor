import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SortableElement, SortableContainer } from 'react-sortable-hoc'
import DragListWrapper from './DragListWrapper'
import QuestionEditor from '../Containers/QuestionEditor'

import style from './Styles/Editor.css'

const Question = SortableElement(props => <QuestionEditor {...props} />)

const List = SortableContainer(({ data }) => (
  <div>
    {data.map((item, index) => (
      <Question key={item.id} index={index} data={{ item, index }} />
    ))}
  </div>
))

export default class QuestionList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props

    return (
      <DragListWrapper
        component={List}
        data={data}
        shouldUseDragHandle={true}
        helperClass={style.stylizedHelper}
        {...this.props}
      />
    )
  }
}