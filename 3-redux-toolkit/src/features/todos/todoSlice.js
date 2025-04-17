import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  todos: [{
    id: 1,
    title: "Learn Redux Toolkit",
    urgent: true,
  }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,  
        urgent: action.payload.urgent,  
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.title = action.payload.title;
      todo.urgent = action.payload.urgent;
    },
    deleteTodo(state, action) {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    }
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
