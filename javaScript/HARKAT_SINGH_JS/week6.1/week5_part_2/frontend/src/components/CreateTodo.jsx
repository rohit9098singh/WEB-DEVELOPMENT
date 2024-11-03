import React, { useState } from "react";

function CreateTodo({ setTodos, todos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        style={{
          padding: "8px",
          marginTop: "2px"
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        style={{
          padding: "8px",
          marginTop: "2px"
        }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        style={{
          margin: 3,
          padding: "0 4px"
        }}
        onClick={async () => {
          try {
            const response = await fetch("http://localhost:3000/todo", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({
                title: title,
                description: description
              })
            });
            
            if (!response.ok) {
              alert("Cannot add your todo");
              return;
            }
            
            const newTodo = await response.json();
            
            setTodos([...todos, newTodo]);
            alert("Todo added successfully in your database");
            
            setTitle("");
            setDescription("");
          } catch (error) {
            console.log("Unable to connect to your database:", error);
            alert("Unable to connect to your database");
          }
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;
