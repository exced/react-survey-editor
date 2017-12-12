import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SortableHandle, SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'

import style from './Styles/Editor.css'

export const Handle = SortableHandle(() => <div className={style.handle} />)

export class Wrapper extends Component {

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
    if (this.state.data.length > 1) {
      const { onSortEnd, onMove } = this.props
      const data = arrayMove(this.state.data, oldIndex, newIndex)

      this.setState({ data, isSorting: false })

      if (onSortEnd) {
        onSortEnd(this.refs.component)
      }

      if (onMove) {
        onMove(data)
      }
    }
  }

  render() {
    const Component = this.props.component
    const { data, isSorting } = this.state
    const props = {
      isSorting,
      data,
      onSortStart: this.onSortStart,
      onSortEnd: this.onSortEnd,
      ref: 'component',
      useDragHandle: this.props.shouldUseDragHandle,
    }

    return <Component {...this.props} {...props} />
  }
}

Wrapper.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  itemClass: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onMove: PropTypes.func,
  onSortStart: PropTypes.func,
  onSortEnd: PropTypes.func,
  component: PropTypes.func,
  shouldUseDragHandle: PropTypes.bool,
}

Wrapper.defaultProps = {
  className: classNames(style.list, style.stylizedList),
  itemClass: classNames(style.item, style.stylizedItem),
}

const DragList = ({ Component, data, onMove, ...rest }) => {
  const Element = (newProps) => SortableElement(props => <Component {...props} {...newProps} />)
  const Wrapped = (props) => {
    const Wrapper = Element(props)
    return (
      <Wrapper {...props} />
    )
  }
  const Container = SortableContainer(({ data, ...props }) => (
    // pass a list of ids instead of plain objects to avoid useless re-rendering on item changes
    <div>
      {data.map((item, index) => (
        <Wrapped key={item} index={index} id={item} {...props} />
      ))}
    </div>
  ))
  return (
    <div>
      <Wrapper
        component={Container}
        data={data}
        shouldUseDragHandle={true}
        helperClass={style.stylizedHelper}
        onMove={onMove}
        {...rest}
      />
    </div>
  )
}

DragList.propTypes = {
  data: PropTypes.array.isRequired, // ids
  Component: PropTypes.func.isRequired,
}

export default DragList