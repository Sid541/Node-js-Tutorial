const express=require("express")
const router=express.Router();

router.get('/',async(req,res)=>{
    const allDbUsers= await User.find({})
    res.setHeader("X-myName","Siddharth")
    return res.json(allDbUsers);
})



router
.route("/:id")
.get(async(req, res)=>{
    const user= await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"})
    return res.json(user);
})
.patch((req,res)=>{
    //TODO create new user
    res.json({status: "pending"});
})
.delete((req,res)=>{
    //TODO create new user
    res.json({status: "pending"});
})
router .post("/",async(req,res)=>{
    //TODO create new user
    const body=req.body;
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg: "All fields are req..."})
    }
    /*users.push({...body, id:users.length+1});
    fs.writeFile(".MOCK_DATA.json", JSON.stringify(users),(err, data)=>{
    return res.status(201).json({status: "success", id: users.length+1})*/
   const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })
    console.log("result",result);
    return res.status(201).json({msg: "success"}); 
})

module.exports=router;