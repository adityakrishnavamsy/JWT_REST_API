const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
// import the created router 
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
dotenv.config();
// connect to mongo DB 
mongoose.connect(process.env.DB_CONNECT,
    () => console.log('conncted to a DB')
);

// middleware to parse json 
app.use(express.json());

// route middlewares 
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


app.listen(3000, () => console.log("Hi ra from server"))