import React, {Component, PropTypes} from'react'
import {connect} from 'react-redux'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import {addTodo, toggle_todo, setVisibility, VisibilityFilters} from '../actions'

class App extends Component {
  render() {
    const {dispatch, todos, visibilityFilter} = this.props;
    return (
        <div>
          <AddTodo
              onAddClick={text => dispatch(addTodo(text))}
          />
          <TodoList
              todos={todos}
              onTodoClick={id => dispatch(toggle_todo(id))}
          />
          <Footer
              filter={visibilityFilter}
              onFilterChange={filter => {
                dispatch(setVisibility(filter))
              }}
          />
        </div>
    )
  }
}

const {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} = VisibilityFilters;
function filterData(state, filter) {
  switch (filter) {
    case SHOW_ALL:
      return state
    case SHOW_COMPLETED:
      return state.filter((item) => {
        return item.completed
      })
      return
    case SHOW_ACTIVE:
      return state.filter((item) => {
        return !item.completed
      })
    default:
      return state
  }

}

export default connect((state) => {
  return {
    todos: filterData(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
})(App);




