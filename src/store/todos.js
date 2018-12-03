const ADD_TODO = 'ADD_TODO'
const FILTER_TODO = 'FILTER_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const INITIAL_STATE = {
    allTodos: [],
    visibleTodos: []
}

export const addTodo = text => ({
    type: ADD_TODO,
    text
})

export const filterTodos = text => ({
    type: FILTER_TODO,
    input: text
})

export const toggleTodo = index => ({
    type: TOGGLE_TODO,
    index
})


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                text: action.text,
                completed: false

            }
            //return [...state, newTodo]

            return {
                ...state,
                allTodos: [...state.allTodos, newTodo]
            }

        case FILTER_TODO: 
            return {
                ...state,
                visibleTodos: state.allTodos.filter(todo =>
                        todo.text.includes(action.input)),
            }

        case TOGGLE_TODO:
            return {
                ...state,
                allTodos: state.allTodos.map((todo, index) => {
                    if (index === action.index) {
                         return {
                             ...todo,
                             completed: !todo.completed
                         }
                    }
                    return todo
                })
            }
        default:
            return state
    }
}