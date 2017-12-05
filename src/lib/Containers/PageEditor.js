import { connect } from 'react-redux'
import { setPage, removePage } from '../Actions/Page'
import { addQuestion } from '../Actions/Question'
import { getPage } from '../Selectors/Page'
import PageEditor from '../Components/PageEditor'

const mapStateToProps = (state, ownProps) => ({
  data: getPage(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setPage(ownProps.id, value)),
  onRemove: () => dispatch(removePage(ownProps.id)),
  onAdd: (type) => dispatch(addQuestion(ownProps.id, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageEditor)
