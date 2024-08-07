const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("db connection sucess" ,conn.connection.name);
    }
    catch(error){
        console.log("db connection failed", error.message);
    }


};

module.exports = connectDB;