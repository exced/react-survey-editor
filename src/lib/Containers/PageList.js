import { connect } from 'react-redux'
import { movePage } from '../Actions/Page'
import { getPageIds } from '../Selectors/Page'
import PageList from '../Components/PageList'

const mapStateToProps = (state) => ({
  data: getPageIds(state),
})

const mapDispatchToProps = dispatch => ({
  onMove: (oldIndex, newIndex) => dispatch(movePage(oldIndex, newIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageList)
