//====================================== THIS IS THE COMMON PART WHICH Will ALways be there=============================
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "E-commerce";
const client = new MongoClient(url);

async function dbConnect(){
    let result =await client.connect();
    db=result.db(database);
    return db.collection("product");
}
//===================================== so we will try to separate this common part from the rest of our code=========
module.exports=dbConnect;