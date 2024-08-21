const fs=require("fs");
const path=require("path");
const { log } = require("util");
const dirpath=path.join(__dirname,"loop_files");// gives the current working directory
console.log(dirpath);

for(i=0;i<5;i++){

    fs.writeFileSync(`${dirpath}/hello${i}.txt`,"a simple text file");

}
fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
         console.log("file name is",item);
    })
});