/**
 * ## Middlewares
 - You have to create a few standard middlewares for your application.
 - You have to create a middleware for logging the number of requests on a server
 - You have to create a middleware for rate limiting a users request based on their username passed in the header
 - You have to create a middleware for logging the number of errors on a server
 - To test, go to the 01-middlewares folder and run `npx jest ./tests` 
 */

 
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable
const express = require('express');

const app = express();
let requestCount = 0;

app.use(function(req,res,next){
    requestCount=requestCount+1;
    next();
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});


