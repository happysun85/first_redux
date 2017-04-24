//action类型名称
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//这个js的作用就是定义一些类型，这个类型是用于传给 reducer 操作的 ，结构应该也是要和reducer里的action分发后操作对应

//过滤类型常量
export const VisibilityFIlters = {
  SHOW_ALL: 'SHOW_ALL',              //全显示
  SHOW_COMPLETED: 'SHOW_COMPLETED',  //只显示完成
  SHOW_ACTIVE: 'SHOW_ACTIVE'         //只显示未完成
};

//用户添加代办项 action 函数
export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  }
};

//用户点击出发完成 action函数 index 具体代办项id
export const completeTodo = index => {
  return {
    type: COMPLETE_TODO,
    index
  }
};

//用户进行过滤代办项 action函数
export const setVisibilityFIlter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
};
