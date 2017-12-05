import { connect } from 'react-redux'
import { setSurvey } from '../Actions/Survey'
import { getSurvey } from '../Selectors/Survey'
import SurveyEditor from '../Components/SurveyEditor'

const mapStateToProps = (state, ownProps) => ({
  item: getSurvey(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (id, value) => dispatch(setSurvey(id, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyEditor)
