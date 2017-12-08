import { connect } from 'react-redux'
import { getVisibleIfQuestions } from '../Selectors/ControllerQuestion'
import QuestionList from '../Components/QuestionList'

const mapStateToProps = (state, ownProps) => ({
  data: getVisibleIfQuestions(state, ownProps),
})

export default connect(mapStateToProps)(QuestionList)
