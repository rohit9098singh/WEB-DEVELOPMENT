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
const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require('mongoose');

// Updated connection string with database name
mongoose.connect('mongodb+srv://rohit:GZG7rPz9qOuyGOsU@cluster0.q8b4u.mongodb.net/user_app');

// Define the User model
const User = mongoose.model('Users', { name: String, email: String, password: String });

// Post request handler for signup
app.post("/signup", async (req, res) => {
    const { username, password, name } = req.body; // Destructure values from req.body
    /**
     * same as
     *  const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;

     */

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: username });// similarly user.update,user.delete methods are also there 

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' }); // Respond if user exists
        }

        // Create a new user instance
        const user = new User({
            name: name,
            email: username,
            password: password // In a real application, hash the password before saving
        });

        // Save the user and handle the promise
        await user.save();
        res.status(201).json({ message: 'User saved successfully!' }); // Respond on success
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Internal server error' }); // Respond on error
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

