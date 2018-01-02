import { connect } from 'react-redux'
import { getPreviousQuestionsFromPage } from '../Selectors/ControllerQuestion'
import { questions } from '../Selectors/Question'
import VisibleIfEditor from '../Components/VisibleIfEditor'

const mapStateToProps = (state, ownProps) => ({
  previousQuestions: getPreviousQuestionsFromPage(state, ownProps),
  questionsMap: questions(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleIfEditor)
