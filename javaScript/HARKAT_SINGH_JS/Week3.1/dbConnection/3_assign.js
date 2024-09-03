/**## JWTs
 - Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
 - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
 - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
 - To test, go to the 02-jwt folder and run `npx jest ./tests`
 */

 const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

// Importing Zod for schema validation
const zod = require("zod");

// Defining the email and password schemas
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6); // Should have minimum 6 characters

// Function to sign a JWT token with username
function signJwt(username, password) {
    // Validate username as an email
    const usernameResponse = emailSchema.safeParse(username);
    // Validate password with a minimum length of 6
    const passwordResponse = passwordSchema.safeParse(password);
    
    // Return null if validations fail
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }
    
    // Create a JWT with the username encoded
    const signature = jwt.sign({ username }, jwtPassword);
    return signature;
}

// Function to decode a JWT token
function decodeJwt(token) {
    try {
        // Decode the token without verifying its signature
        jwt.decode(token);
        return true; // Return true if decoding succeeds
    } catch (error) {
        return false; // Return false if decoding fails
    }
}

// Function to verify a JWT token
function verifyJwt(token) {
    try {
        // Verify the token with the secret key
        jwt.verify(token, jwtPassword);
        return true; // Return true if verification succeeds
    } catch (error) {
        return false; // Return false if verification fails
    }
}

// Testing the signJwt function
const token = signJwt("rohit@gmail.com", "123456");
console.log(token); // Should log the token or null if input validation fails

// Testing the decodeJwt function
console.log(decodeJwt(token)); // Should log true if token can be decoded

// Testing the verifyJwt function
console.log(verifyJwt(token)); // Should log true if token can be verified
