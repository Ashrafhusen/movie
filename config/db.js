const mongoose = require('mongoose')

const dotenv = require('dotenv')


dotenv.config();

const connectDb = async () => {
    try {
         const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("connected")
        
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
        
    }
}

module.exports = connectDb;
