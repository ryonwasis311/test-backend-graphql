const mongoose = require("mongoose");
const mongoURI = process.env.MONGDB_URI;

const connectDB = async () =>{
    try {
        mongoose.connect(mongoURI, {
            newNewUrlParser: true,
        });
        
        console.log("MongoDB connected.....");
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

