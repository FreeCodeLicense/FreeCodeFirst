const express=require("express")
const router=express.Router()
const { Person } = require("../database")

router.get("/new/user",(req,res)=>{
    let person=new Person({
        name: req.query.name,
        age: req.query.age,
        favoriteFoods: [req.query.favoriteFoods]
    })

    person.save().then((res)=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
    res.send({ name:"Abrorbek" })
})

module.exports=router