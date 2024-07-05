const express = require('express');
const app=express();
const fs=require("fs");
function logReqRes(filename){
    return ((req,res,next)=>{
        fs.appendFile(filename,(err,data)=>{
            next();
        })
    })
}
module.exports={
    logReqRes,
}