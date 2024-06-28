const express = require('express');
const app = express();
const port = 3000;

//https://github.com/mde/ejs/wiki/using-EJS-with-Express
app.set("view engine","ejs");


app.get('/', (req, res) => {
  //suppose this all have came from the database
  let sitename="Adidas";
  let searchText="search Now";
  let arr=["hey buddy",54,65]
  res.render('index',{sitename:sitename,searchText:searchText,arr});
})

app.get("/blog/:slug",(req,res)=>{
    let blogTitle="Adidas why and when";
    let blogContent="ITs a very good brand" ;
    res.render('blogpost',{blogTitle:blogTitle,blogContent:blogContent});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})