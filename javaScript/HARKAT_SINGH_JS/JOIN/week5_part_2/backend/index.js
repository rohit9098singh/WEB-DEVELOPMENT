const express = require("express");
const app = express();
const task = require("./db");
const { createTodo,updateTodo } = require("./types");
app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const safeParsedPayload = createTodo.safeParse(createPayload);

  // Check if the payload is valid
  if (!safeParsedPayload.success) {
    return res.status(401).json({
      msg: "Failed to authenticate at this very moment. Please try again.",
    });
  }

  try {
    const newTask = await task.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.status(201).json({
      msg: "Todo created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Error creating todo",
    });
  }
});

app.get("/todos", function (req, res) {
  try {
    const tasks = task.find();
    console.log(tasks);
    
    if (task.length > 0) {
      res.json({
        tasks: task,
      });
    } else {
      res.status(404).json({
        msg: "no task found at there ",
      });
    }
  } catch (error) {
    res.json({
      msg: `${error} has been occured`,
    });
  }
});

app.put("/updateTodo", async function (req, res) {
  const updatedPayload = req.body;
  const safeParsedUpdatedPayload = updateTodo.safeParse(updatedPayload); 

  // Validate the payload
  if (!safeParsedUpdatedPayload.success) {
      return res.status(400).json({ 
          msg: "Invalid input." 
      });
  }

  try {
      const updating = await task.updateOne(
          { _id: req.body.id }, 
          { completed: true } 
      );

      if (updating.modifiedCount === 0) {
          return res.status(404).json({ msg: "No task found with the given ID." });
      }

      res.status(200).json({ msg: "Task updated successfully." });
  } catch (error) {
      console.error(error); 
      res.status(500).json({ msg: "An error occurred while updating the task." });
  }
});

