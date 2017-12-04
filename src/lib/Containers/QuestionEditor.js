import { connect } from 'react-redux'
import { setQuestion, resetQuestion, removeQuestion } from '../Actions/Editor'
import QuestionEditor from '../Components/QuestionEditor'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => {
  const { pageIndex } = ownProps
  const { index } = ownProps.data
  return {
    onChange: (value) => dispatch(setQuestion(pageIndex, index, value)),
    onReset: (type) => dispatch(resetQuestion(pageIndex, index, type)),
    onRemove: () => dispatch(removeQuestion(pageIndex, index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor)
