import { connect } from 'react-redux'
import { setPage, removePage, addQuestion } from '../Actions/Editor'
import PageEditor from '../Components/PageEditor'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => {
  const { index } = ownProps.data
  return {
    onChange: (value) => dispatch(setPage(index, value)),
    onRemove: () => dispatch(removePage(index)),
    onAdd: (type) => dispatch(addQuestion(index, type)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PageEditor)
