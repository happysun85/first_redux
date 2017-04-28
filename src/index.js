import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'  //按我理解。这个provider就是redux提供给 react 的组件化容器   扩展知识： 还有router-redux什么的

//这俩是gitDEMO的
/*import App from './gitDemo/containers/App';   //还需要具体理解
 import todoApp from './gitDemo/reducers';*/

//这是官方demo
/*import App from './OfficialDemo/containers/App';
 import todoApp from './OfficialDemo/reducers';*/

//个人的demo
import App from './myDemo/containers/App';
import todoApp from './myDemo/reducers';

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);
