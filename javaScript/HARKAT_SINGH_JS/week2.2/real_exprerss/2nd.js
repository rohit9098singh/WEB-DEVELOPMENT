const express=require("express");

const app=express();

function calculateSum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

// now i need the input from the uses and ther are two ways with which they can give it to us 
// 1) QUERY PARAMETERS will be like localhost:3000/?n=5&c=6; depends the argument it is excepting

app.get("/",function(req,res){    // this says that as soon as i get the patient i will send it in for check up
    const n=req.query.n; // will recive by localhost:3000/?n=30
    const ans=calculateSum(n);
    res.send(`hi, the sum is ${ans}`);
});

app.listen(2000);// with this we can say that the doctor is ready in the respective
                 // room but he hasnt implemented any kind of services yet

                 