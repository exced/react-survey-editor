import { connect } from 'react-redux'
import { ActionCreators as UndoRedo } from 'redux-undo'
import { addPage } from '../Actions/Page'
import { getEntities, getResult } from '../Selectors/Normalizr'
import { denormalize } from '../Schemas/Survey'
import SiderMenu from '../Components/SiderMenu'

const mapStateToProps = (state, ownProps) => ({
  denormalize: () => denormalize(getResult(state), getEntities(state))
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: () => dispatch(addPage(ownProps.item.id)),
  onUndo: () => dispatch(UndoRedo.undo()),
  onRedo: () => dispatch(UndoRedo.redo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SiderMenu)
