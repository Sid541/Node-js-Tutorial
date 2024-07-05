
/*const users = require("./MOCK_DATA.json");*/
const express = require('express')
const app=express();
const { default: mongoose } = require("mongoose");
const userRouter=require("./routes/user")
const { type } = require("os");
const { connectMongoDb } = require('./connection');
const {logReqRes} = require("./middlewares")
const PORT=8000;
const url="mongodb://127.0.0.1:27017/youtube-app-1"
//connection of mongoose

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")


//middleware
app.use(express.urlencoded({extended: false}));

app.use(logReqRes("log.txt"))



//Routes
app.use("/user", userRouter);

app.listen(8000, ()=> console.log(`Server started at PORT: ${PORT}`))