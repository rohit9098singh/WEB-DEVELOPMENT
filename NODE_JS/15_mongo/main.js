const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "E-commerce";
const client = new MongoClient(url);

async function dbConnection() {
    try {
        await client.connect();
        const db = client.db(database);
        const collection = db.collection("product");
        // const response = await collection.find({}).toArray();
        const response = await collection.find({name:"iphone"}).toArray();  //==> for a particular search 
        console.log(response);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

console.log(dbConnection());


