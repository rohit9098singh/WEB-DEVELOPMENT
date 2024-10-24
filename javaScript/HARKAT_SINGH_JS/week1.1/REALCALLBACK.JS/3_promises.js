// promises are the syntactical sugar that makes this code slightly more readable...
// The reson for getting introduction of promise is to get rid of call backs....

/*
1) this is an ugly way to make a asynchronous function on our own..

 it is just a wrapper on the top of another async function which is fine.
 usually all async function you will read will be on the top of 
 js provided async function like setTimeout or fs.readFile
 
                const fs = require("fs");

                function rohitReadFile(callback){
                    fs.readFile("a.txt","utf-8",function(err,data){
                        callback(data);
                    })
                }

                function onDone(){
                    console.log(data);
                    
                }

                rohitReadFile(onDone);
*/

/*
 2==> cleaner way to define the promises

 ye kya kar ra suppose jaha pe readfile hai vo hai rohit or jo call kar r hai vo hai amit
rohit bola amit ko ke mai tumse vada karta hoon kuch karne ka jab mai vo kar loon tab tum.then ko chalana

                const fs = require("fs");
                const path = require("path");

                function KiratsReadFile() {
                const filePath = path.join(__dirname, "a.txt"); // Construct the correct path
                console.log("inside kiratsReadFile");

                return new Promise(function (resolve) {
                    fs.readFile(filePath, "utf-8", function (err, data) {
                    console.log("before resolve");
                    resolve(data);
                    });
                });
                }

                function onDone(data) {
                console.log(data);
                }

                KiratsReadFile().then(onDone);
*/
 // 3==> way of creating promises


 const fs = require("fs");
 const path = require("path");
 
 function rohitReadFile() {
     console.log("before promise is called");
 
     const filePath = path.join(__dirname, "a.txt"); // Corrected __dirname
     console.log(filePath);
     
     let p = new Promise((resolve, reject) => { // Fixed Promise syntax
         fs.readFile(filePath, "utf-8", function(err, data) { // Use filePath without quotes
             if (err) {
                 console.log("some error occurred");
                 reject(err); // Corrected reject
             } else {
                 resolve(data);
             }
         });
     });
     return p;
 }
 
 function onDone(data) {
     console.log(data);
 }
 
 let a = rohitReadFile().then(onDone).catch((err) => {
     console.error("Promise rejected due to error:", err);
 });

 console.log(a);
 
 
/**
 * ye promises kuch hota nhi vo bas ek class hai jisko hum object bana ke access kar sakte hai 
 * same chiz hamara date class ke liye bhi implement hota hai
 * 
 */
