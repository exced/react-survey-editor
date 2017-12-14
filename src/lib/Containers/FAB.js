import { connect } from 'react-redux'
import { ActionCreators as UndoRedo } from 'redux-undo'
import { getEntities, getResult } from '../Selectors/Normalizr'
import { denormalize } from '../Schemas/Survey'
import FAB from '../Components/FAB'

const mapStateToProps = (state, ownProps) => ({
  denormalize: () => denormalize(getResult(state), getEntities(state))
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUndo: () => dispatch(UndoRedo.undo()),
  onRedo: () => dispatch(UndoRedo.redo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FAB)