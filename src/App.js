import React from 'react';
import { connect } from 'react-redux'
import TodoList from './TodoList';


const mapStateToProps = state => ({
  todos: state.todos.allTodos,
  visibleTodos: state.todos.visibleTodos
})

class App extends React.Component {

  
  render() {
    console.log('App props', this.props)
    return <TodoList todos={this.props.todos}/>
  }
}

export default connect(mapStateToProps)(App);
