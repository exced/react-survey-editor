import { connect } from 'react-redux'
import { setSurvey } from '../Actions/Survey'
import { movePage } from '../Actions/Page'
import { toggleCollapsedSurvey } from '../Actions/ControllerSurvey'
import { getControllerSurvey } from '../Selectors/ControllerSurvey'
import SurveyEditor from '../Components/SurveyEditor'

const mapStateToProps = (state, ownProps) => ({
  visibleIf: getControllerSurvey(state).visibleIf,
  collapsed: getControllerSurvey(state).collapsed,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setSurvey(ownProps.value.id, value)),
  onMove: (value) => dispatch(movePage(ownProps.value.id, value)),
  onToggleCollapsed: () => dispatch(toggleCollapsedSurvey(ownProps.value.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyEditor)
