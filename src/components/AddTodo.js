import React, {PropTypes, Component} from 'react';

/**
 * 当前js是一个add组件
 */

class AddTodo extends Component {
  //点击添加事件
  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  render() {
    return (
        <div className="todo-add">
          <input type="text" ref="input" placeholder="请输入内容"/>
          <button onClick={(e) => {
            this.handleClick(e);
            e.preventDefault();
          }}>添加待办事项
          </button>
        </div>
    )
  }
}

//props 验证
AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
export default AddTodo;
