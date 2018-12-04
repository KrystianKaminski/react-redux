import React from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleTodo, deleteTodo } from './store/todos'

const mapStateToProps = store => ({
    _todos: store.todos.allTodos
})

const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index)),
    _deleteTodo: index => dispatch(deleteTodo(index))
})

class TodoList extends React.Component {


    state = { value: '' }

    handleInputChange = event => {
        this.setState({ value: event.target.value })
    }

    handleButtonClick = () => {
        console.log('Want to save todo: ', this.state.value)
        this.props._addTodo(this.state.value)
    }

    handleTodoClick = (index) => {
        this.props._toggleTodo(index)
    }

    handleDeleteClick = index => {
        this.props._deleteTodo(index)
    }

    render() {
        console.log('TodoList props', this.props)
        return <div>
            <input onChange={this.handleInputChange} />
            <button onClick={this.handleButtonClick}>Add todo</button>
            {this.props._todos.map((todo, index) =>
                <div
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                    onClick={() => this.handleTodoClick(index)}
                    key={todo.text}>
                    <div>
                        {todo.text}

                    </div>
                    <button
                        type="button"
                        onClick={() => this.handleDeleteClick(index)}
                        >X</button>
                </div>
            )}
        </div>

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)