import { connect } from 'react-redux'
import { getPreviousQuestionsMapFromPage } from '../Selectors/ControllerQuestion'
import VisibleIfEditor from '../Components/VisibleIfEditor'

const mapStateToProps = (state, ownProps) => ({
  questionsMap: getPreviousQuestionsMapFromPage(state, ownProps),
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleIfEditor)
