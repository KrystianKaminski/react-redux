import React from 'react'
import { connect } from 'react-redux'


import { addTodo, toggleTodo, deleteTodo, filterTodos } from './store/todos'

const mapStateToProps = store => ({
    _todos: store.todos.visibleTodos
})

const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index)),
    _deleteTodo: index => dispatch(deleteTodo(index)),
    _filterTodo: filteredText => dispatch(filterTodos(filteredText))
})

class TodoList extends React.Component {


    state = { 
        value: '',
        searchValue: ''
    }

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
        return <div
            className="todo"
        >
            {this.renderInput()}
            {this.renderSearchInput()}
            {this.renderList()}
        </div>

    }

    renderInput() {
        return <div>
            <h2>Add todos</h2>
            <input onChange={this.handleInputChange} />
            <button onClick={this.handleButtonClick}>Add todo</button>
        </div>
    }

    renderList() {
        return this.props._todos.map((todo, index) =>
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
        )
    }

    renderSearchInput() {
        return <div>
            <h2>Search todos</h2>
            <input onChange={this.handleSearchInputChange} />
            <button onClick={this.handleSearchButtonClick}>Search todo</button>
        </div>
    }

    handleSearchInputChange = (e) => {
        this.setState({searchValue: e.target.value})

    }

    handleSearchButtonClick = () => {
        this.props._filterTodo(this.state.searchValue)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)