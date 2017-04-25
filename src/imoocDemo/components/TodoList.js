import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {
  return (<ul>
    {todos.map(todo => {
      return <Todo
          key={todo.id}
          {...todo}
          onclick={() => onTodoClick(todo.id)}
      />
    })}
  </ul>)
};

export default Todo;