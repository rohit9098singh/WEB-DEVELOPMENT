// promises helps us to refrain from call back hell

import fs from "fs/promises"

let a =await fs.readFile("harry.txt");

// let b=await fs.writeFile("harry.txt", // this code will override the content 
// "\nthis is amazing promise")
// console.log(a.toString(),b);

//=============== OR ============================
let b=await fs.appendFile("harry.txt",  // this will not override the content but it just adds on 
"\nthis is amazing promise")
console.log(a.toString(),b);