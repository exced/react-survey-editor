import { connect } from 'react-redux'
import { ActionCreators as UndoRedo } from 'redux-undo'
import { addPage } from '../Actions/Page'
import FAB from '../Components/FAB'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: () => dispatch(addPage(ownProps.item.id)),
  onUndo: () => dispatch(UndoRedo.undo()),
  onRedo: () => dispatch(UndoRedo.redo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FAB)
