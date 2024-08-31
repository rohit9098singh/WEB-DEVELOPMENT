const zod = require("zod");
const express = require("express");
const app = express();

app.use(express.json()); // To parse JSON bodies in requests

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(), // Ensures the email is a valid format
        password: zod.string().min(8) // Ensures the password is at least 8 characters long
    });

    const response = schema.safeParse(obj);
    return response; // Return the response so it can be used in route handling
}

// Example usage of validateInput function
validateInput({
    email: "rohitsingh95724@gmail.com",
    password: "12345678"
}); // This will log the response to the console

// Changed route to POST since GET requests do not typically have a body
app.post("/login", function (req, res) {
    const response = validateInput(req.body);
    if (!response.success) {
        res.json({
            msg: "Your inputs are invalid."
        });
        return;
    } else {
        res.json({
            msg: "Validation successful",
            data: response.data // Include the validated data in the response
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Your app is listening at port ${PORT}`);
});
