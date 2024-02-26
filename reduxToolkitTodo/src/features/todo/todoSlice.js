import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1, 
        text: "Hello!",
    }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (states, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload, 
            }
            states.todos.push(todo);
        },
        removeTodo: (states, action) => {
           states.todos = states.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (states, action) => {
            const {id , text} = action.payload;
            const todo = states.todos.find((todo) => todo.id === id);
            if(todo){
                todo.text = text;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;