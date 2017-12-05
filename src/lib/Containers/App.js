import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppComponent from '../Components/App'
import { set, reset } from '../Actions/Survey'

class App extends Component {

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
      <AppComponent />
    )
  }
}

App.propTypes = {
  initialValue: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => ({
  survey: state.editor,
})

const mapDispatchToProps = dispatch => ({
  set: (v) => dispatch(set(v)),
  reset: () => dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
