import React, { useState } from "react";

function CreateTodo(task) {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        style={{
          margin: 3,
          padding: " 0 4px",
        }}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(e.target.value);  
        }}
      />
      <input
        type="text"
        placeholder="description"
        style={{
          margin: 3,
          padding: " 0 4px",
        }}
        onChange={(e) => {
          setDescription(e.target.value);
          console.log(e.target.value);
          
        }}
      />

      <button
        style={{
          margin: 3,
          padding: " 0 4px",
        }}
        onClick={async ()=>{
            try {
                 const response=fetch("http://localhost:3000/todo",{
                    method:"post",
                    headers:{
                        "Content-type":"Application/json",
                        "Accept":"Application/json"
                    },
                    body:JSON.stringify({
                        title:title,
                        description:description
                    })
                  });
                  if(!response.ok){
                    res.status(402).json({
                        msg:"cannot add your todo"
                    })
                  } 
                  const json=await response.json();
                  alert("todo added successfully in your db ")
            } catch (error) {
                console.log(error);
                res.status(401).json({
                    msg:"unable to connect to your database"
                })
                
            }
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;
