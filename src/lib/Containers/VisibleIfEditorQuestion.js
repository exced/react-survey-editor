import { connect } from 'react-redux'
import { getPreviousQuestionsMapFromQuestion } from '../Selectors/ControllerQuestion'
import VisibleIfEditor from '../Components/VisibleIfEditor'

const mapStateToProps = (state, ownProps) => ({
  questionsMap: getPreviousQuestionsMapFromQuestion(state, ownProps),
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleIfEditor)
