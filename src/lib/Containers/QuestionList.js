import { connect } from 'react-redux'
import { moveQuestion } from '../Actions/Question'
import QuestionList from '../Components/QuestionList'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMove: (oldIndex, newIndex) => dispatch(moveQuestion(ownProps.pageIndex, oldIndex, newIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
