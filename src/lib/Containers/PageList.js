import { connect } from 'react-redux'
import { movePage } from '../Actions/Page'
import PageList from '../Components/PageList'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMove: (oldIndex, newIndex) => dispatch(movePage(oldIndex, newIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageList)
