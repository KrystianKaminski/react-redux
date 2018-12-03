import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import './index.css';
import App from './App';

import todos, { addTodo } from './store'

// REDUX STUFF GOES HERE

const rootReducer = combineReducers({
    todos
})
const store = createStore(rootReducer)

// REDUX STUFF END

console.warn(store.getState())

store.dispatch(addTodo('Go shopping!'))

console.warn(store.getState())


ReactDOM.render(<App />, document.getElementById('root'));