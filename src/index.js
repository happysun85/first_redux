import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'  //按我理解。这个provider就是redux提供给 react 的组件化容器   扩展知识： 还有router-redux什么的
import App from './containers/App';   //还需要具体理解
import todoApp from './reducers';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider>
      <App/>
    </Provider>,
    document.getElementById('root')
);
