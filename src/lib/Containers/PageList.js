import { connect } from 'react-redux'
import { getVisibleIfPages } from '../Selectors/ControllerPage'
import PageList from '../Components/PageList'

const mapStateToProps = (state, ownProps) => ({
  data: getVisibleIfPages(state, ownProps),
})

export default connect(mapStateToProps)(PageList)
