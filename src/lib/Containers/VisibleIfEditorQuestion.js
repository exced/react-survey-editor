import { connect } from 'react-redux'
import { getPreviousQuestionsFromQuestion } from '../Selectors/ControllerQuestion'
import { questions } from '../Selectors/Question'
import VisibleIfEditor from '../Components/VisibleIfEditor'

const mapStateToProps = (state, ownProps) => ({
  previousQuestions: getPreviousQuestionsFromQuestion(state, ownProps),
  questionsMap: questions(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleIfEditor)
