import express from 'express'
import connectDB from './db/index.js';
import app from './app.js';
import 'dotenv/config'

//Creating a database connection
connectDB().then(()=> {

    //listening to the app.
    app.listen(process.env.PORT, () => {
        console.log("Server running on port: " + process.env.PORT);
    })

}).catch((err) => {
    console.log("Mongo DB Connection failed: " + err);
    
})

//always wrap the db in try catch or promises.
/*
async function connectDB() {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`).then(() => {
        console.log("Database connected");
        app.on("error", (error) => {
            console.log("ERROR => " + error);
            throw err;
        })
    }).catch((err) => {
        console.log("Error: " + err);
    });
}

connectDB();

*/