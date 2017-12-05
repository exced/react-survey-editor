import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import App from '../Containers/App'
import { set, reset } from '../Actions/Survey'

class Root extends Component {

  componentWillMount = () => {
    this.props.reset()
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.initialValue) {
      this.props.set(nextProps.initialValue)
    }
  }

  render() {

    const { onExport } = this.props

    return (
      <App onExport={onExport} />
    )
  }
}

Root.propTypes = {
  initialValue: PropTypes.object,
  onExport: PropTypes.func,
}

Root.defaultProps = {
  onExport: (v) => console.tron.log(v, true)
}

const mapDispatchToProps = dispatch => ({
  set: (v) => dispatch(set(v)),
  reset: () => dispatch(reset())
})

export default connect(null, mapDispatchToProps)(Root)