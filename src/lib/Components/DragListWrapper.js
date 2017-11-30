import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { arrayMove } from 'react-sortable-hoc'

import style from './Styles/Editor'

export default class DragListWrapper extends Component {

  static propTypes = {
    data: PropTypes.array,
    className: PropTypes.string,
    itemClass: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    onSortStart: PropTypes.func,
    onSortEnd: PropTypes.func,
    component: PropTypes.func,
    shouldUseDragHandle: PropTypes.bool,
  }

  static defaultProps = {
    className: classNames(style.list, style.stylizedList),
    itemClass: classNames(style.item, style.stylizedItem),
    width: 400,
    height: 600,
  }

  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      isSorting: false,
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.state.data !== nextProps.data) {
      this.setState({ data: nextProps.data })
    }
  }

  onSortStart = () => {
    const { onSortStart } = this.props
    this.setState({ isSorting: true })

    if (onSortStart) {
      onSortStart(this.refs.component)
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { onSortEnd } = this.props
    const { data } = this.state

    this.setState({ data: arrayMove(data, oldIndex, newIndex), isSorting: false })

    if (onSortEnd) {
      onSortEnd(this.refs.component)
    }
  }

  render() {
    const Component = this.props.component
    const { data, isSorting } = this.state
    const props = {
      isSorting,
      data,
      onSortEnd: this.onSortEnd,
      onSortStart: this.onSortStart,
      ref: 'component',
      useDragHandle: this.props.shouldUseDragHandle,
    }

    return <Component {...this.props} {...props} />
  }
}
