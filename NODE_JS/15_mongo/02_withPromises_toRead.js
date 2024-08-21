const dbConnect= require("./mongodb")

//===1) first method .then();

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

const main= async ()=>{
    let data = await dbConnect();
    data =await data.find().toArray();
    console.log(data);
    console.log("main function called");
}
main();