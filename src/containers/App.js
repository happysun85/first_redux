import React, {PropTypes} from 'react';
import {connect} from 'react-redux';    //这个应该是绑定数据和视图的工具

//这个感觉就一个模板，规定了结构，用来和reducer交互的
import {addTodo, completeTodo, setVisibilityFIlter, setVisibilityFIlter} from '../actions';

//下面这3个引用的是组件，用于显示的
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

//todo 明天继续
//https://github.com/willerfu/redux-todoList/blob/master/src/components/Footer.js

