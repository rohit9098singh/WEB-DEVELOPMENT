const http= require("http");

const hostname="127.0.0.1";
const port=3000;

let  server=http.createServer((req,res)=>{
     res.statusCode=200;
     res.setHeader("content-Type","text/plain");
     res.end("hello world\n");
});

server.listen(port,hostname,()=>{
    console.log(`servere is running at https://${hostname}:${port}/`);
});
