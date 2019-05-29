import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/todoActions'
import RadioFilterGroup from '../presentational/RadioFilterGroup';

const mapStateToProps = (state) => {
  return {
    selectedFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (_newFilter) => {
      dispatch(setVisibilityFilter(_newFilter))
    }
  }
}

const FilterSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioFilterGroup);

export default FilterSelector;