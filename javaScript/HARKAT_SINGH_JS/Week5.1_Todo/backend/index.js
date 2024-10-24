const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Allow access only from the React app

// POST /todo
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "You are providing the wrong inputs" });
    return;
  }

  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false // Set default to false
    });
    res.json({ msg: "Todo created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error creating todo" });
  }
});

// GET /todo
app.get("/todo", async function (req, res) {
  try {
    const allTodos = await todo.find(); // Fetch all todos
    const specificTitle = req.query.title ? req.query.title.trim() : '';
    
    const specificTodos = specificTitle 
      ? await todo.find({ title: specificTitle }) 
      : []; // Return empty array if no specific title is given

    res.json({ todos: allTodos, specific_todos: specificTodos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error retrieving todos" });
  }
});

// PUT /completed
app.put("/completed", async function (req, res) {
  const updatedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatedPayload);
  
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "You have sent the wrong inputs" });
    return;
  }

  try {
    await todo.updateOne({ _id: req.body.id }, { completed: true });
    res.json({ msg: "Todo marked as completed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error updating todo" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
