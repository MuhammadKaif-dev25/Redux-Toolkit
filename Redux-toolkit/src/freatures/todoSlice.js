import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {
            id: 1,
            text :"Learn Redux Toolkit",
            Completed: flase
        },
        {
            id: 2,
            text :"Buy Milk",
            Completed: flase,
        },
    ],
};



export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("payload:", action.payload);
            const todo = {
                id: nanoid(),
                text: action.payload,
                Completed:flase,
            };
            state.todos.push(todo);
        },
        removeTodo:(state, acton) =>{
            state.todos = state.todos.filter((todo) => todo.id !== actoin.payload)
        },
    },
});


//actonis

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;