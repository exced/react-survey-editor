import { connect } from 'react-redux'
import App from '../Components/App'
import { getSurvey } from '../Selectors/Survey'

const mapStateToProps = (state, ownProps) => ({
  value: getSurvey(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
