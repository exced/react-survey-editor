import { connect } from 'react-redux'
import { movePage } from '../Actions/Editor'
import PageList from '../Components/PageList'

const mapStateToProps = (state, ownProps) => ({
  data: state.editor.pages
})

const mapDispatchToProps = dispatch => ({
  onMove: (oldIndex, newIndex) => dispatch(movePage(oldIndex, newIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageList)
