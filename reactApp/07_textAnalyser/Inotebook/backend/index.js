const connectTomongo = require('./db'); // Import the connection function
const express = require('express')
connectTomongo();

const app = express();
app.use("/api/auth",require("./routes/auth"))
// app.use("/api/auth",require("./routes/notes"))
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports=router 