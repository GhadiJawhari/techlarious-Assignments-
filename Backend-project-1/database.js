const mongoose = require("mongoose");
require("dotenv").config();
exports.connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MongoDb_URI);
        console.log("MongoDB connected !!");

    }catch(err){
        console.error(err);
        process.exit(1);
    }
}