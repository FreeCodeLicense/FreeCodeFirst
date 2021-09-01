const express=require("express")
const router=express.Router()
const { User, Exercise }=require("../../database/index")

router.post("/users",async (req,res)=>{
    let user=await User.create({ username:req.body.username })
    res.json(user)
})
router.get("/users",async (req,res)=>{
    let users=await User.find().select("username").exec()
    res.json(users)
})

router.post("/users/:_id/exercises",async (req,res)=>{
    let now=new Date(Date.now())

    let exercise=await Exercise.create({
        description:req.body.description,
        duration:req.body.duration,
        date:req.body.date || now.toDateString(),
        _id:req.params._id
    })

    res.json(exercise)
})

router.get("/users/:_id/logs",async (req,res)=>{
    let logs=await User.findOne({ _id:req.params._id }).populate("logs").exec()
    res.json(logs)
})

module.exports=router

// {"username":"Abrorbek","_id":"612e0fcae3ac6c05c37f6597"}
// {"_id":"612e0fcae3ac6c05c37f6597","username":"Abrorbek","date":"Fri Feb 12 2021","duration":2,"description":"my mind is blowing"}