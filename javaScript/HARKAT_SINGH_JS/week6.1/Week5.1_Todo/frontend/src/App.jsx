import { useEffect, useState } from 'react';
import Createtodo from "./components/Createtodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await res.json();
        setTodos(json.todos); // Ensure 'todos' exists in the response
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <Createtodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
