const dbConnect=require("./0_mongodb");

const deleteData=async ()=>{
    console.log("function called");
    let data=await dbConnect();
    let result=await data.deleteOne(// can also use deleteMany({}) at here
        {name:"max_pro 15"}
    )
    console.log(result);
    if(result.acknowledged){
        console.log("record deleted");
    }
    
}

deleteData();
