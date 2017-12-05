import { connect } from 'react-redux'
import App from '../Components/App'
import { getSurvey } from '../Selectors/Survey'

const mapStateToProps = (state, ownProps) => ({
  item: getSurvey(state)
})

export default connect(mapStateToProps)(App)
