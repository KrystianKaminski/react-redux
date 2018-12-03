import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import './index.css';
import App from './App';

// REDUX GOES HERE

const rootReducer = combineReducers()
const store = createStore(() => {})

ReactDOM.render(<App />, document.getElementById('root'));