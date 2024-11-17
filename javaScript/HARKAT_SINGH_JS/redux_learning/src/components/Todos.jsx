import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos); // Get todos from the Redux state
  const dispatch = useDispatch();

  return (
    <div className="p-4 border border-red-200">
      <h1 className="text-2xl font-bold mb-4">Todos List</h1>
      {todos.length > 0 ? (
        <div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded-lg shadow-md hover:bg-gray-200"
            >
              <span className="text-lg">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-transparent p-1 rounded-full hover:bg-red-200"
                title="Delete Todo"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/581/271/non_2x/trash-can-icon-garbage-bin-with-lid-delete-symbol-illustration-free-vector.jpg"
                  alt="Delete"
                  className="w-6 h-6"
                />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No todos to display.</p>
      )}
    </div>
  );
}

export default Todos;
