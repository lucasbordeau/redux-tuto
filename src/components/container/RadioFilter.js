import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/todoActions'
import RadioFilterPresentational from '../presentational/RadioFilterPresentational'

const mapStateToProps = (state, ownProps) => {
  return {
    selected: ownProps.filter === state.visibilityFilter,
    label: ownProps.label
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const RadioFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioFilterPresentational);

export default RadioFilter;