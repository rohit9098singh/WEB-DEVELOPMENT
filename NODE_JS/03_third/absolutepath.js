import path from "path"

let myPath="d:/my codes/web devlopment/NODE_JS/third/absolutepath.js";
console.log(path.extname(myPath));// what is the extension of my file is
// let mypath = console.log(path);

console.log(path.dirname(myPath));
console.log(path.basename(myPath));

console.log(path.join("c:/","programs\\harry.txt"));