import { connect } from 'react-redux'
import { setQuestion, resetQuestion, removeQuestion } from '../Actions/Question'
import { toggleCollapsedQuestion } from '../Actions/ControllerQuestion'
import { getControllerQuestion } from '../Selectors/ControllerQuestion'
import { getQuestion } from '../Selectors/Question'
import QuestionEditor from '../Components/QuestionEditor'

const mapStateToProps = (state, ownProps) => ({
  value: getQuestion(state, ownProps),
  collapsed: getControllerQuestion(state, ownProps).collapsed,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setQuestion(ownProps.id, value)),
  onReset: (type) => dispatch(resetQuestion(ownProps.id, type)),
  onRemove: () => dispatch(removeQuestion(ownProps.parent.id, ownProps.id)),
  onToggleCollapsed: () => dispatch(toggleCollapsedQuestion(ownProps.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor)
