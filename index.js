const express=require("express")
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.status(200).send({ name:"Abrorbek", surname:"Ubaydullayev" })
})

app.listen(8080,"localhost",function (){
    console.log("Server started")
})