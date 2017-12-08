import { connect } from 'react-redux'
import { setPage, removePage } from '../Actions/Page'
import { addQuestion, moveQuestion } from '../Actions/Question'
import { toggleCollapsedPage } from '../Actions/ControllerPage'
import { getControllerPage } from '../Selectors/ControllerPage'
import { getPage } from '../Selectors/Page'
import PageEditor from '../Components/PageEditor'

const mapStateToProps = (state, ownProps) => ({
  value: getPage(state, ownProps),
  visibleIf: getControllerPage(state, ownProps).visibleIf,
  collapsed: getControllerPage(state, ownProps).collapsed,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setPage(ownProps.id, value)),
  onRemove: () => dispatch(removePage(ownProps.parent.id, ownProps.id)),
  onAdd: (type) => dispatch(addQuestion(ownProps.id, type)),
  onMove: (value) => dispatch(moveQuestion(ownProps.id, value)),
  onToggleCollapsed: () => dispatch(toggleCollapsedPage(ownProps.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageEditor)
