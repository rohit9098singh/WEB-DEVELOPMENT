const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");

const app = express();
const PORT = 3000;
const jwtPassword = "secret";

// Middleware to parse JSON bodies
app.use(express.json());

// Defining the email and password schemas
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

// Function to sign a JWT token with username
function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({ username }, jwtPassword);
    return signature;
}

// Route to generate a JWT token
app.post("/generate-token", (req, res) => {
    const { username, password } = req.body;
    const token = signJwt(username, password);

    if (token) {
        res.status(200).json({ token });
    } else {
        res.status(400).json({ error: "Invalid username or password" });
    }
});

// Function to decode a JWT token
function decodeJwt(token) {
    try {
        jwt.decode(token);
        return true;
    } catch (error) {
        return false;
    }
}

// Route to decode a JWT token
app.post("/decode-token", (req, res) => {
    const { token } = req.body;

    if (decodeJwt(token)) {
        res.status(200).json({ decoded: true });
    } else {
        res.status(400).json({ decoded: false });
    }
});

// Function to verify a JWT token
function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true;
    } catch (error) {
        return false;
    }
}

// Route to verify a JWT token
app.post("/verify-token", (req, res) => {
    const { token } = req.body;

    if (verifyJwt(token)) {
        res.status(200).json({ verified: true });
    } else {
        res.status(400).json({ verified: false });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
