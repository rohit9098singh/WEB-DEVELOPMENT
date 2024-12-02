require("dotenv").config();
const mongoose=require("mongoose");
const connectionString=process.env.MONGODB_URL;

try {     
    mongoose.connect(connectionString)
        .then(()=>{console.log("connected to mongoDB")})
        .catch((error)=>{console.log("failed to connect to your database");
        })    
  
} catch (error) {
    console.log(error);
    
}
