const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath)); // Uncomment if you have static files

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/profile', (_, res) => {
    const user = {
        name: 'anil',
        email: 'rohit@321',
        city: 'banglore',
        skills:["php","c","c++"]
    };
    // Pass the user object to the EJS template with the key 'user'
    res.render('profile', { user: user });
});

app.get("/login",(_,res)=>{
     res.render("login")
})









// Serve static HTML files
app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

// Handle 404 errors
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404_page.html`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
