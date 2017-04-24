import React, {PropTypes} from 'react';
import Todo from './Todo';

/**
 * 当前js是一个ul组件
 */

class TodoList extends React.Component {
  render() {
    return (
        <div className='todo-list'>
          <ul>
            {this.props.todos.map((todo, index) =>
                <Todo
                    key={index}
                    {...todo} // ES6 扩展运算符  降解
                    todoClick={() => this.props.onTodoClick(index)}/>
            )}
          </ul>
        </div>
    )
  }
}
// props验证      这里是验证数组，元素必须是对象，shape用来限制对象的结构
TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      }).isRequired
  ).isRequired
};
export default TodoList;
