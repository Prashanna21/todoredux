import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [

    ],

    editing : false,
    editingId: null,


}

 const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo: (state, action) => {
            const todo  = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
         updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text: action.payload.msg } : todo)
         },
         toggleEdit: (state, action) => {
            state.editing = true;
            state.editingId = action.payload
         },
         toggleEditOff: (state, action) => {
            state.editing = false;
         }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleEdit, toggleEditOff} = todoSlice.actions

export default todoSlice.reducer