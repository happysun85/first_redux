import React from 'react';
import {connect} from 'react-redux'
import AddTodo from '../containers/AddTodo'
import {addTodo, setVisibility, toggleTodo} from '../actions'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const App = () => (
    <div>
      <AddTodo/>
      {/*<VisibleTodoList/>
       <Footer/>*/}
    </div>
)

export default connect()(App)
