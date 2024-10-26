import React from 'react';

function Todo(props) {
  const tasks = props.task;
  
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={task.id || index}>
          <h1>{task.title}</h1>
          <h2>{task.description}</h2>
          <button>{task.completed ? "Completed" : "Mark as Complete"}</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
