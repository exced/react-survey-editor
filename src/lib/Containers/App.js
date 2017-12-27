import { connect } from 'react-redux'
import { getSurvey } from '../Selectors/Survey'
import App from '../Components/App'

const mapStateToProps = (state, ownProps) => ({
  value: getSurvey(state),
})

export default connect(mapStateToProps)(App)
