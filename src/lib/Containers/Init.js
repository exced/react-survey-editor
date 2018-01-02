import { connect } from 'react-redux'
import { set } from '../Actions/Survey'
import Init from '../Components/Init'

const mapDispatchToProps = dispatch => ({
  set: (v) => dispatch(set(v)),
})

export default connect(null, mapDispatchToProps, null, { withRef: true })(Init)