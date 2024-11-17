import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id:1,text:"hello",completed:false}], // Corrected typo in `initialState`
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generate unique ID
        text: action.payload, // Use payload as the text for the todo
      };
      state.todos.push(todo); // Add new todo to the array
    },
    removeTodo: (state, action) => {
      // Filter out the todo with the matching ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Exporting actions and reducer
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
