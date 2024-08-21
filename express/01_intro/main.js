const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

const harryMiddleWare = (req, res, next) => {
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Headers: ${JSON.stringify(req.headers)}`);
  next(); // Ensure this line is present to allow the request to proceed
};

app.use(harryMiddleWare);
app.use(express.static(path.join(__dirname, "public")));

app.get('/hello/:name', (req, res) => {
  res.send('Hello World! ' + req.params.name);
});

app.get('/about', (req, res) => {
  // res.send("about");
  // res.sendFile(path.join(__dirname,"index.html"));
  res.json({ "harry": 34 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
