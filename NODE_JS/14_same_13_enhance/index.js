const express = require('express');
const app = express();
const reqfilter = require('./middleware'); // Ensure this middleware exists and is correctly implemented

const route = express.Router();
route.use(reqfilter);

// Application-level middleware example (commented out)
// app.use(reqfilter);

app.get('/', (req, res) => {
    res.send('welcome to home page');
});

app.get('/about', reqfilter, (req, res) => {
    res.send('welcome to the about page');
});

// Define routes using the router correctly
route.get('/users', (req, res) => {
    res.send('welcome to the users page');
});

route.get('/contact', (req, res) => {
    res.send('welcome to the contact page');
});

// Use the router for routes starting with '/'
app.use('/', route);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
