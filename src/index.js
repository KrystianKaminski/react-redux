import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import './index.css';
import App from './App';

// REDUCERS IMPORT
import todos, { addTodo } from './store/todos'
import counter, {increment, decrement} from './store/counter'

// REDUX CONFIG GOES HERE

const rootReducer = combineReducers({
    todos,
    counter
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

// REDUX CONFIG END


store.dispatch(addTodo('Go shopping!'))
store.dispatch(addTodo('Other thing'))
store.dispatch(addTodo('Another thing!'))

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())
store.dispatch(decrement())


window.increaseCounter = () => store.dispatch(increment())
window.decreaseCounter = () => store.dispatch(decrement())

window.addTodo = (text) => store.dispatch(addTodo(text))


ReactDOM.render(<App />, document.getElementById('root'));