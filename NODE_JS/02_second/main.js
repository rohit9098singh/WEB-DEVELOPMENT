//const http=require("http"); since it is a module as i have made cahnges and converted it into into type:"module" we cannot use it like this 

// import http from "http"

// const hostname = '127.0.0.1';
// const port = 80;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running  at http://${hostname}:${port}/`);
// });

//============================= this works till we have made it type:module; =============================================================

// import {a,b,d} from "./mymodule.js"
// console.log(a,b,d);


// import obj from "./mymodule.js" // we can even change the name of the export 
// console.log(obj);

// import rohit from "./mymodule.js"// we are able to this because we are not using the named export
// console.log(obj);

//=========================== removal of type:module;=====================================================

const a= require("./mymodule2.js");
console.log(a,__dirname);