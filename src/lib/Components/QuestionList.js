import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SortableElement, SortableContainer } from 'react-sortable-hoc'
import DragListWrapper from './DragListWrapper'
import QuestionItem from '../Containers/QuestionItem'

import style from './Styles/Editor.css'

const Question = SortableElement(props => <QuestionItem {...props} />)

const List = SortableContainer(({ data, key }) => (
  <div>
    {data.map((item, index) => (
      <Question key={`${key}-question-${index}`} index={index} data={{ item, index }} />
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