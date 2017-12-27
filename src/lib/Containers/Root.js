import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LocaleProvider } from 'antd'
import App from '../Containers/App'
import { set } from '../Actions/Survey'
import { initialValue } from '../Models/Survey'
import enUS from 'antd/lib/locale-provider/en_US'
import frFR from 'antd/lib/locale-provider/fr_FR'

const locales = {
  enUS: enUS,
  frFR: frFR,
}

class Root extends Component {

  componentWillMount = () => {
    this.props.set(this.props.initialValue)
  }

  componentWillReceiveProps = (nextProps) => {
    this.props.set(nextProps.initialValue)
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
  initialValue: PropTypes.shape({

  }),
  locale: PropTypes.string,
  onExport: PropTypes.func,
}

Root.defaultProps = {
  initialValue: initialValue(),
  locale: "enUS",
  onExport: (v) => { }
}

const mapDispatchToProps = dispatch => ({
  set: (v) => dispatch(set(v)),
})

export default connect(null, mapDispatchToProps)(Root)