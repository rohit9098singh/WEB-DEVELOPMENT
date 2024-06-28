const express = require("express");
const app = express();

const fs = require("fs");
const blog = require("./routes/blog");

const port = 3000;

app.use(express.static("public"));
app.use("/blog",blog);



//creating the middleware 1 - does logging for our application
// req-request object jo aae == res-jo response aae == next- matlab next middleware
app.use((req, res, next) => {
  console.log(req.headers);
  req.rohit = "\tmy name is Rohit singh";
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} request\n`);
  console.log(`${Date.now()} is a ${req.method} request`);
  console.log("M1");
  next();
});
//creating middleware 2
app.use((req, ree, next) => {
  console.log("M2");
  req.rohit="i am aman agarwal"
  next();
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!" + req.rohit);
});
app.get("/contact", (req, res) => {
  res.send("Hello contact we are here to help you out!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
