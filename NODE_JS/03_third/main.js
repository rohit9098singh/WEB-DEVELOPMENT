const fs=require("fs");
// const fs=require("fs/promises");  we can also do it here what we were doing in the promises.js path

console.log("starting");

// fs.writeFileSync("harry.txt","harry is a good boy");// write a blocking code like unless and until it runs it would not exxept
//the above approachh is not good as it works on asynchronous means it doesnot waits for some function to run to ovoid we use 

fs.writeFile("rohit.txt","harry is a good boy",()=>{
    console.log("done");
    fs.readFile("rohit.txt",(error,data)=>{
        // console.log(error,data); // the value of data will be in the form of buffer which is not redable 
        console.log(error,data.toString());
    })
});

fs.appendFile("rohit.txt","harryrobo",(e,d)=>{
    console.log(d);
})

console.log("ending");

// this code works only when type:"module";