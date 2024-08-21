const fs = require("fs");

const input = process.argv;

console.log(process.argv); // argument vector
console.log(process.argv[1]); // script path

if (input[2] === "add") {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] === "remove") {
    fs.unlinkSync(input[3]); // Correct function for removing a file
} else {
    console.log('invalid output');
}
