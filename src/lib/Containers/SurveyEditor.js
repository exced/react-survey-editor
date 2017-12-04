import { connect } from 'react-redux'
import { setSurvey } from '../Actions/Editor'
import SurveyEditor from '../Components/SurveyEditor'

const mapStateToProps = (state, ownProps) => ({
  title: state.editor.title
})

const mapDispatchToProps = dispatch => ({
  onChange: (v) => dispatch(setSurvey(v)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyEditor)
