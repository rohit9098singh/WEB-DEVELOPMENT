let firstName = "Rohit";
let age = 22;
let isMarried = false; // Boolean value instead of string
let gender = "male";

// Check marital status
if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is not married");
}

// Greet based on gender
if (gender === "male") {
  console.log("Hello Mr. " + firstName);
} else if (gender === "female") {
  console.log("Hello Ms. " + firstName);
} else {
  console.log("Hello " + firstName);
}
