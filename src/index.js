import React from 'react';
import ReactDOM from 'react-dom';

// 重置全局样式
import './reset.css';

// App组件，大写字母开头
import TodoList from './todolist/TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));
