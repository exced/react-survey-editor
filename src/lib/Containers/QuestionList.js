import { connect } from 'react-redux'
import { moveQuestion } from '../Actions/Editor'
import QuestionList from '../Components/QuestionList'

const mapStateToProps = (state, ownProps) => ({
  data: state.editor.pages[ownProps.pageIndex].questions,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMove: (oldIndex, newIndex) => dispatch(moveQuestion(ownProps.pageIndex, oldIndex, newIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
