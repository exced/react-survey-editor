import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import App from './App'
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
    return (
      <App />
    )
  }
}

Root.propTypes = {
  initialValue: PropTypes.object,
}

const mapDispatchToProps = dispatch => ({
  set: (v) => dispatch(set(v)),
  reset: () => dispatch(reset())
})

export default connect(null, mapDispatchToProps)(Root)