import {combineReducers} from 'redux';
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VisibilityFilters;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case COMPLETE_TODO:
      let obj = state[action.id];
      obj.completed = !obj.completed;
      state[action.id] = obj;
      return [...state];
    default :
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
