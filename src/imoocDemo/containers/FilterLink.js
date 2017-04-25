import {connect} from 'react-redux';
import Link from '../components/Link'
import {setVisibility} from '../actions'

const mapStateToProps = (state, OwnProps) => {
  return {
    active: OwnProps.filter === state.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onclick: () => {
      dispatch(setVisibility(ownProps.filter))
    }
  }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
