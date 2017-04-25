import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';    //这个应该是绑定数据和视图的工具

//这个感觉就一个模板，规定了结构，用来和reducer交互的
import {addTodo, completeTodo, setVisibilityFIlter, VisibilityFilters} from '../actions';

//下面这3个引用的是组件，用于显示的
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

//https://github.com/willerfu/redux-todoList/blob/master/src/components/Footer.js

class App extends Component {
    render() {
        //App 接收 state 映射后的对象obj中的属性和dispath 传递给子组件
        const {dispatch, visibleTodos, visibilityFilter} = this.props;
        return (
            <div className="container">
                <AddTodo
                    onAddClick={text => dispatch(addTodo(text))}
                />
                <TodoList
                    todos={visibleTodos}
                    //分发到点击触发完成 action
                    onTodoClick={index => dispatch(completeTodo(index))}
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={
                        nextFilter =>
                            dispatch(setVisibilityFIlter(nextFilter))
                    }
                />
            </div>
        )
    }
}

// props 验证
App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};




// 过滤匹配显示待办项
const selectTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            // js filter方法匹配 completed = true的todo 返回一个新数组
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            // js filter方法过滤掉 completed = false的todo 返回一个新数组
            return todos.filter(todo => !todo.completed);
    }
};

/**
 * mapStateToProps 映射state
 *
 * @param  state  [store里的state]
 * @return object [返回一个对象，把对象里面的参数以属性传送给App，以及附带一个 dispatch]
 */
const select = (state) => {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
};
// 通过 connect(select)(App) 连接 store 和 App 容器组件。
//这个select好像一个中间件，处理完数据后给APP, dispatch应该是connect给的
export default connect(select)(App);
