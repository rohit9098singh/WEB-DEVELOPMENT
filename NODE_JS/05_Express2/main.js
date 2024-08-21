const express = require("express");


const app = express();
const blog=require("./routes/blog")
const blog=require("./routes/shop")

const port = 3000;

app.use(express.static("public"));
app.use("/blog",blog)
app.use("/blog",shop)

app
  .get("/", (req, res) => {
    //suppose some data is comming from the browwer then at that case
     console.log(req.query); 
    console.log("hey hits a get request");
    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    console.log("hey it is a post request");
    res.send("Hello World post!");
  })
  .put("/", (req, res) => {
    console.log("hey it is a PUT request");
    res.send("Hello World put!");
  });

// rendering of the html file
app.get("/index", (req, res) => {
  console.log("hey it is a PUT request");
  // res.send("Hello World put!");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 });
});

app.listen(port, () => {
  console.log(`Example app listening on  port ${port}`);
});
