import { connect } from 'react-redux'
import { setSurvey } from '../Actions/Survey'
import { movePage } from '../Actions/Page'
import SurveyEditor from '../Components/SurveyEditor'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setSurvey(ownProps.value.id, value)),
  onMove: (value) => dispatch(movePage(ownProps.value.id, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyEditor)
