const express = require("express");
const app = express();
const { task } = require("./db");  // Correct import by destructuring
const cors=require("cors")
const { createTodo,updateTodo } = require("./types");

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  // res.json({
  //   msg:"hello"
  // })
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

app.get("/todos", async function (req, res) {
  try {
    const tasks = await task.find({}); // Use find() with lowercase 'f'
    console.log(tasks);

    if (tasks.length > 0) {
      res.json({
        task: tasks,
      });
    } else {
      res.status(404).json({
        msg: "No task found.",
      });
    }
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({
      msg: `${error.message} has been occurred`,
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
 
   const updateFields={completed:"true"}
  if(updatedPayload.title){
    updateFields.title=updatedPayload.title
  }
  if(updatedPayload.description){
    updateFields.description=updatedPayload.description
  }

  try {
      const updating = await task.updateOne(
          { _id: req.body.id }, 
          { $set: updateFields } 
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

const port = 3000; // Define the port
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});

