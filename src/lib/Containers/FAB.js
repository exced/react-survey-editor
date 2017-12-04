import { connect } from 'react-redux'
import { ActionCreators as UndoRedo } from 'redux-undo'
import { addPage } from '../Actions/Editor'
import { PAGE } from '../Types/Editor'
import FAB from '../Components/FAB'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(addPage(PAGE)),
  onUndo: () => dispatch(UndoRedo.undo()),
  onRedo: () => dispatch(UndoRedo.redo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FAB)
