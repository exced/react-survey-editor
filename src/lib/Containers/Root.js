import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LocaleProvider } from 'antd'
import App from '../Containers/App'
import { set, reset } from '../Actions/Survey'
import enUS from 'antd/lib/locale-provider/en_US'
import frFR from 'antd/lib/locale-provider/fr_FR'

const locales = {
  enUS: enUS,
  frFR: frFR,
}

class Root extends Component {

  componentWillMount = () => {
    this.props.reset()
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.initialValue) {
      this.props.set(nextProps.initialValue)
    }
  }

  // Added this in case you need your own save logic
  onSave = () => {
    this.app.onExport()
  }

  render() {

    const { locale, onExport } = this.props

    return (
      <LocaleProvider locale={locales[locale]}>
        <App ref={ref => this.app = ref} onExport={onExport} />
      </LocaleProvider>
    )
  }
}

Root.propTypes = {
  locale: PropTypes.string,
  initialValue: PropTypes.object,
  onExport: PropTypes.func,
}

Root.defaultProps = {
  locale: "enUS",
  onExport: (v) => { }
}

const mapDispatchToProps = dispatch => ({
  set: (v) => dispatch(set(v)),
  reset: () => dispatch(reset())
})

export default connect(null, mapDispatchToProps)(Root)