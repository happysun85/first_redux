/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
}

export const toggle_todo = (id) => {
  return {
    type: COMPLETE_TODO,
    id
  }
};

export const setVisibility = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
};

export const testAsync = () => {
  return () => {
    return (dispatch,txt) => {
      setTimeout(() => {
        dispatch(addTodo(txt));
      }, 1000)
    }
  }
}
