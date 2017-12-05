import { connect } from 'react-redux'
import { ActionCreators as UndoRedo } from 'redux-undo'
import { addPage } from '../Actions/Page'
import FAB from '../Components/FAB'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(addPage()),
  onUndo: () => dispatch(UndoRedo.undo()),
  onRedo: () => dispatch(UndoRedo.redo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FAB)
