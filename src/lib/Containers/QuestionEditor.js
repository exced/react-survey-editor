import { connect } from 'react-redux'
import { setQuestion, resetQuestion, removeQuestion } from '../Actions/Question'
import { toggleCollapsedQuestion, toggleVisibleIfQuestion } from '../Actions/ControllerQuestion'
import { getControllerQuestion, getVisibleIfMode } from '../Selectors/ControllerQuestion'
import { getQuestion } from '../Selectors/Question'
import QuestionEditor from '../Components/QuestionEditor'

const mapStateToProps = (state, ownProps) => ({
  value: getQuestion(state, ownProps),
  visibleIfMode: getVisibleIfMode(state),
  visibleIf: getControllerQuestion(state, ownProps).visibleIf,
  collapsed: getControllerQuestion(state, ownProps).collapsed,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setQuestion(ownProps.id, value)),
  onReset: (type) => dispatch(resetQuestion(ownProps.id, type)),
  onRemove: () => dispatch(removeQuestion(ownProps.parent.id, ownProps.id)),
  onToggleCollapsed: () => dispatch(toggleCollapsedQuestion(ownProps.id)),
  onToggleVisibleIf: () => dispatch(toggleVisibleIfQuestion(ownProps.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor)
