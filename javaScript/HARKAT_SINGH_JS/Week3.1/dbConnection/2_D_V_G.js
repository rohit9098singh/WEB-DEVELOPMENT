/**
 * 1)Generating 
 * 2)Decoding
 * 3)Verifying
 */
const jwt = require("jsonwebtoken");

// 1) Generate a JWT

const value = {
    name: "rohit",
    accountNumber: "123456789"
};

// jwt
const token = jwt.sign(value, "secret"); // Corrected method from generate to sign
// This token has been generated using this secret, and hence this token can only be verified using this secret only.
// Therefore, anyone can make the replica of the checkbook but cannot verify because it will be verified with the respective bank machine only from which it has been generated.
// But suppose if the bank loses the machine itself then it will be a problem so it is the responsibility of the bank to keep it safe.

console.log(token);
/**
 * ============= THIS IS WHAT MY CHECK BOOK IS ====================================
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lI
joicm9oaXQiLCJhY2NvdW50TnVtYmVyIjoiMTIzNDU2Nzg
5IiwiaWF0IjoxNzI1MjI0NDMwfQ.M3rIeJY2nTa2Gf6DL6
2NfNQKyNwNJmwQjl0G-hhTPU4
 */

// 2) Decode the JWT (without verifying)
// This is just to decode the payload and see the data inside; it does not verify the token's validity.
const decoded = jwt.decode(token);
console.log("Decoded Token:", decoded);

// 3) Verify the JWT
// Verifying checks the signature and ensures the token hasn't been tampered with.
try {
    const verified = jwt.verify(token, "secret");
    console.log("Verified Token:", verified);
} catch (err) {
    console.error("Token verification failed:", err.message);
}