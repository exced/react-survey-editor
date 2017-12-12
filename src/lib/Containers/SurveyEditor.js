import { connect } from 'react-redux'
import { setSurvey } from '../Actions/Survey'
import { movePage, addPage } from '../Actions/Page'
import { toggleCollapsedSurvey } from '../Actions/ControllerSurvey'
import { getControllerSurvey } from '../Selectors/ControllerSurvey'
import SurveyEditor from '../Components/SurveyEditor'

const mapStateToProps = (state, ownProps) => ({
  collapsed: getControllerSurvey(state, ownProps).collapsed,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setSurvey(ownProps.value.id, value)),
  onAdd: () => dispatch(addPage(ownProps.value.id)),
  onMove: (value) => dispatch(movePage(ownProps.value.id, value)),
  onToggleCollapsed: () => dispatch(toggleCollapsedSurvey(ownProps.value.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyEditor)
