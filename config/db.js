const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;

const connectDB = async () =>{
    try {
        mongoose.connect(mongoURI, {
            useNewUrlParser: true,
        });
        
        console.log("MongoDB connected.....");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

