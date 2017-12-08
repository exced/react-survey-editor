import { connect } from 'react-redux'
import { getPreviousQuestionValuesFromPage } from '../Selectors/Question'
import VisibleIfEditor from '../Components/VisibleIfEditor'

const mapStateToProps = (state, ownProps) => ({
  questions: getPreviousQuestionValuesFromPage(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleIfEditor)
