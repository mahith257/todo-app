import { initialState } from "./initial-state";
import shortid from 'shortid'

function saveStateToLocalStorage(state) {
    window.localStorage.setItem("all-todos", JSON.stringify(state))
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            saveStateToLocalStorage({...state, todos : [...state.todos, {id: shortid(),title: action.payload, completed: false, important: false}]})
            return {...state, todos : [...state.todos, {id: shortid(),title: action.payload, completed: false, important: false}]}
        
        case 'TOGGLE_COMPLETED':
            const newTodos = state.todos.map((todo) =>{
                if(todo.id === action.payload){
                    todo.completed = !todo.completed
                }
                return todo
            })

            saveStateToLocalStorage({...state, todos: newTodos})
            return {...state, todos: newTodos}
        
        case 'DELETED_TODO':
            const newTodos2 = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })

            saveStateToLocalStorage({...state, todos: newTodos2})
            return {...state, todos: newTodos2}

        case 'IMPORTANT_TODO':

            const newState = {...state, todos: state.todos.map((todo) => {
                if(todo.id === action.payload){
                    todo.important = !todo.important
                }
                return todo
            })}

            saveStateToLocalStorage(newState)
            return newState
        
        default:
            return state
            
    }
}