import { connect } from 'react-redux'
import { setQuestion, resetQuestion, removeQuestion } from '../Actions/Question'
import { toggleVisibleIfMode } from '../Actions/Controller'
import { getQuestion } from '../Selectors/Question'
import QuestionEditor from '../Components/QuestionEditor'

const mapStateToProps = (state, ownProps) => ({
  value: getQuestion(state, ownProps),
  visibleIfMode: state.controller.visibleIfMode,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setQuestion(ownProps.id, value)),
  onReset: (type) => dispatch(resetQuestion(ownProps.id, type)),
  onRemove: () => dispatch(removeQuestion(ownProps.parent.id, ownProps.id)),
  onToggleVisibleIfMode: () => dispatch(toggleVisibleIfMode()),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor)
