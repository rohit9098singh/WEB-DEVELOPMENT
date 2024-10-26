import { useState, useEffect } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect( () => {
    const fetchTodo = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          response.status(401).json({
            msg: "you have some error while fetching the data ",
          });
        }
        const data = await response.json();
        setTodos(data.task);
      } catch (error) {
        console.log(`${error} please resolve this `);
      }
    };
    fetchTodo();
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todo task={todos}/>
    </div>
  );
}

export default App;
