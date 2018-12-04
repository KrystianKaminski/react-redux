import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

// REDUCERS IMPORT
import todos, { addTodo, filterTodos, toggleTodo, deleteTodo } from './store/todos'
import counter, { increment, decrement, reset } from './store/counter'
import cart, { addToCart } from './store/cart'

// REDUX CONFIG GOES HERE

const rootReducer = combineReducers({
    todos,
    counter,
    cart
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

// REDUX CONFIG END




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));