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
          onFilterChange={filter => dispatch(setVisibility(filter))}
        />
      </div>
    )
  }
}

export default connect((state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
})(App);




