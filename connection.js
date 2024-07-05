const mongoose=require("mongoose")
async function connectMongoDb(url){
    mongoose.connect(url,{
        useNewUrlParser: true,   
        useUnifiedTopology: true
    })
    .then(()=>console.log("mongoDB connected"))
    .catch((err)=>console.log('mongoDB error',err));
}
module.exports={
    connectMongoDb,
}