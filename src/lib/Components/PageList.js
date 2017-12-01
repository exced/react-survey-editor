// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SortableElement, SortableContainer } from 'react-sortable-hoc'
import DragListWrapper from './DragListWrapper'
import PageEditor from '../Containers/PageEditor'

import style from './Styles/Editor.css'

const Page = SortableElement(props => <PageEditor {...props} />)

const List = SortableContainer(({ data }) => (
  <div>
    {data.map((item, index) => (
      <Page key={item.id} index={index} data={{ item, index }} />
    ))}
  </div>
))

export default class PageList extends Component {
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
