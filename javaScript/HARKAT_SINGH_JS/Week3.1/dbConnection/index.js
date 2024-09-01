/**
 * WE HAVE TO CREATE A BACKEND LOGIC FOR A SERVER THAT IS SOMEONE HOW CONNECTED TODATA BASES 
 * AND THE USER IS ABLE TO SEND OUT REQUEEST IN ANY OF THIS 
 * 1)/SIGNUP{
 *            USERNAME
 *            PASSWORD
 *           }
 * 2)/SIGNIN{
 *             TO CHECK WHERTHER THE USER WAS REALLY SIGNED IN 
 *             AND CHECK WHETHER THE TOKEN IS PROVIDED OR NOT AND ALSO VERIFY WITH THAT TOKENS
 *          }
 * 3)/USERS{
 *             GET THE DETAILS OF ALL THE USER AT HERE 
 *        }
 */
const express=require("express");
const app=express();
app.use(express.json());
const mongoose = require('mongoose');

// Updated connection string with database name
mongoose.connect('mongodb+srv://rohit:GZG7rPz9qOuyGOsU@cluster0.q8b4u.mongodb.net/userappnew');

// Define the User model
const User = mongoose.model('User', { name: String, email: String, password: String });

// Create an instance of the User model
app.post("/",function(req,res){
    const username=req.body.username;
    const passsword=req.body.passsword;
    const name=req.body.name
    const user = new User({
        name: name,
        email: username,
        password: password
    });
    
    //Save the user and handle the promise
    user.save()
        .then(() => console.log('User saved successfully!'))
        .catch(error => console.error('Error saving user:', error));
    
})
