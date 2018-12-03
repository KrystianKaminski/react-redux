import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import './index.css';
import App from './App';

// REDUCERS IMPORT
import todos, { addTodo, filterTodos, toggleTodo, deleteTodo } from './store/todos'
import counter, {increment, decrement, reset} from './store/counter'
import cart, {addToCart} from './store/cart'

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






window.increaseCounter = () => store.dispatch(increment())
window.decreaseCounter = () => store.dispatch(decrement())
window.reset = () => store.dispatch(reset())
window.addToCart = (title, price) => store.dispatch(addToCart(title, price))


window.addTodo = (text) => store.dispatch(addTodo(text))
window.filterTodos = (text) => store.dispatch(filterTodos(text))
window.toggleTodo = index => store.dispatch(toggleTodo(index))
window.deleteTodo = index => store.dispatch(deleteTodo(index))


ReactDOM.render(<App />, document.getElementById('root'));