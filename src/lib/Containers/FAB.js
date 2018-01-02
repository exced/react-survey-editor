import { connect } from 'react-redux'
import { ActionCreators as UndoRedo } from 'redux-undo'
import FAB from '../Components/FAB'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUndo: () => dispatch(UndoRedo.undo()),
  onRedo: () => dispatch(UndoRedo.redo()),
})

export default connect(null, mapDispatchToProps)(FAB)
