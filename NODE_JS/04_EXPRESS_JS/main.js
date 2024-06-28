
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // built in middle ware hai jo ke public folders ko public banata hai jo bhi folder ka nam vahi parameter me jaise file me publid hai folder ka nam

//app.get or app.post or app.put or app.delete(path,handler);
app.get('/', (req, res) => {
  res.send('Hello World! welocome to the party guys ')
})
app.get('/about', (req, res) => {
  res.send('about us!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

//========================== open throuh the path ===========================
// app.get("/blog/intro-to-js",(req,res)=>{   http://localhost:3000/blog/intro-to-js
//   res.send("hello intro-to-js")
// })

// app.get("/blog/intro-to-python",(req,res)=>{
//   res.send("hello intro-to-python")
// })

//=========================== with a different and better method to it ======

  // logic to fetch the slug from the database ye kya karta hai na slug ke jagha pe aapne aap value dal deta hai or hame nhi dalna paadta hai upper jaise python js etc
app.get("/blog/:slug",(req,res)=>{
  console.log(req.params); // will output  { slug: 'intro-to-js' }
  console.log(req.query); // will output { mode: 'dark', region: 'in' },
  res.send(`hello ${req.params.slug}`)
})

app.get("/blog/:slug/:second",(req,res)=>{
  res.send(`hello ${req.params.slug} and ${req.params.second}`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})