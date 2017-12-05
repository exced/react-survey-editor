import { connect } from 'react-redux'
import { setPage, removePage } from '../Actions/Page'
import { addQuestion, moveQuestion } from '../Actions/Question'
import { getPage } from '../Selectors/Page'
import PageEditor from '../Components/PageEditor'

const mapStateToProps = (state, ownProps) => ({
  item: getPage(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setPage(ownProps.id, value)),
  onRemove: () => dispatch(removePage(ownProps.parent.id, ownProps.id)),
  onAdd: (type) => dispatch(addQuestion(ownProps.id, type)),
  onMove: (value) => dispatch(moveQuestion(ownProps.id, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageEditor)
