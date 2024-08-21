const fs= require("fs");
const path=require("path");
const dirname=path.join(__dirname,"curd");

console.log(dirname);
const filePath=`${dirname}/apple.txt`

// fs.writeFileSync(filePath,"hello moota how are you");

fs.readFile(filePath,"utf8",(err,item)=>{
    console.log(item);
});

// fs.appendFile(filePath,"here we are adding some content",(err)=>{
//     if(!err){
//         console.log("file is updated");
//     }
//     else{
//         console.log(err);
//     }
// })

// fs.rename(filePath,`${dirname}/moota.txt`,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file is updated");
//     }
// });

fs.unlinkSync(`${dirname}/moota.txt`);