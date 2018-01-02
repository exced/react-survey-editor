import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LocaleProvider } from 'antd'
import App from '../Containers/App'
import { initialValue } from '../Models/Survey'
import enUS from 'antd/lib/locale-provider/en_US'
import frFR from 'antd/lib/locale-provider/fr_FR'

const locales = {
  enUS: enUS,
  frFR: frFR,
}

export default class Init extends Component {

  componentWillMount = () => {
    this.props.set(this.props.initialValue)
  }

  componentWillReceiveProps = (nextProps) => {
    this.props.set(nextProps.initialValue)
  }

  // Put this in case you need your own save logic
  onExport = () => this.app.wrappedInstance.onExport()

  render() {

    const { locale, onExport } = this.props

    return (
      <LocaleProvider locale={locales[locale]}>
        <App ref={ref => this.app = ref} onExport={onExport} />
      </LocaleProvider>
    )
  }
}

Init.propTypes = {
  initialValue: PropTypes.object,
  locale: PropTypes.string,
  onExport: PropTypes.func,
}

Init.defaultProps = {
  initialValue: initialValue(),
  locale: "enUS",
  onExport: (v) => { }
}
