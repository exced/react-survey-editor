import { connect } from 'react-redux'
import { setSurvey } from '../Actions/Survey'
import { movePage } from '../Actions/Page'
import { getPreviousQuestionValues } from '../Selectors/Question'
import VisibleIfEditor from '../Components/VisibleIfEditor'

const mapStateToProps = (state, ownProps) => ({
  questions: getPreviousQuestionValues(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setSurvey(ownProps.value.id, value)),
  onMove: (value) => dispatch(movePage(ownProps.value.id, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleIfEditor)
