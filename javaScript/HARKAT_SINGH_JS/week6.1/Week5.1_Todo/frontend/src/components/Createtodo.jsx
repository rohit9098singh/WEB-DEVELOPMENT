import React, { useState } from "react";

function Createtodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title"
        style={{
          padding: 10,
          margin: 10,
        }}
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Description"
        style={{
          padding: 10,
          margin: 10,
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          })
            .then(async (res) => {
              const json = await res.json();
              alert("Todo added");
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("Failed to add todo");
            });
        }}
      >
        Add todo
      </button>
    </div>
  );
}

export default Createtodo;
