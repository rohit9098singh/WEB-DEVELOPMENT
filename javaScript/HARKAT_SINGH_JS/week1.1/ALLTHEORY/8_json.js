/* JSON PROVIDE TWO METHOD
   1) STRINGIFY()
   2)PARSE()
*/


const user = {
    name: "rohit",
    age: "24",
    gender: "male"
};

// Convert the object to a JSON string
const convertedUser = JSON.stringify(user);

// Parse the JSON string back to a JavaScript object
const user_1 = JSON.parse(convertedUser);

// Now you can access the properties
console.log(user_1["gender"]);  // Output: "male"
