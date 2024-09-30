# Lecture37--Connecting-Node-Server-To-A-Database-Cipherschools
// In this lecture we have been successful in establishing our node js server connection with the mongoDB database
// The javascript that we have used ;

// appMongoose.js

const {connect} = require("mongoose");

const MONGO_URL = "mongodb+srv://Venkateshwara_Raju:catatemyear@mycluster1.ar09ufk.mongodb.net";

const DB_NAME = `cs-mern`;

async function connectDb(){
  try {
        await connect(`${MONGO_URL}/${DB_NAME}`);
    console.log(`MongoDB connected.`)
} catch (err){
    console.log(err);
}
}
connectDb();
