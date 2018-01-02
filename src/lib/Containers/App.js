import { connect } from 'react-redux'
import { getSurvey } from '../Selectors/Survey'
import { getEntities, getResult } from '../Selectors/Normalizr'
import { denormalize } from '../Schemas/Survey'
import App from '../Components/App'

const mapStateToProps = (state, ownProps) => ({
  value: getSurvey(state),
  denormalize: () => denormalize(getResult(state), getEntities(state))
})

export default connect(mapStateToProps, null, null, { withRef: true })(App)
