

const dbConnect=require("./0_mongodb");

const updateData=async ()=>{
    try {
        let data =await dbConnect();
        let result=await data.updateOne(
            {name:"max_pro five"},{$set:{name:"max_pro 15"}}
        )
        console.warn(result)
    } catch (error) {
        console.log(error);
    }
   
};
updateData()