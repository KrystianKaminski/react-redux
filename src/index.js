import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import './index.css';
import App from './App';

import todos from './store'

// REDUX STUFF GOES HERE

const rootReducer = combineReducers({
    todos
})
const store = createStore(rootReducer)

// REDUX STUFF END

ReactDOM.render(<App />, document.getElementById('root'));