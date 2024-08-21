// const dbConnect= require("./0_mongodb");

// const insert = async () => {
//     try {
//         const db = await dbConnect();
//         const collection = db.collection("product");  // Specify the collection name here
//         const result = await collection.insertOne(
//             { name: "note-5", brand: "vivo", price: 120000, category: "mobile" }
//         );
//         console.log("Insert Function", result.insertedId);
//     } catch (error) {
//         console.error("Error inserting document:", error);
//     }
// }

// insert();

const dbConnect = require("./0_mongodb");

const insertingData = async () => {
    try {
        const db = await dbConnect();
        const collection = db.collection("product");  // Specify the collection name here
        const result = await collection.insert(
            [
                {name: "note-5",brand: "vivo",price: 120000,category: "mobile"},
                {name: "note-6",brand: "vivo",price: 100000,category: "mobile"},
                {name: "note-7",brand: "vivo",price: 1880000,category: "mobile"}
            ]
        );
        console.log("Insert Function", result.insertedId);
    } catch (error) {
        console.error("Error inserting document:", error);
    }
}

insertingData();
