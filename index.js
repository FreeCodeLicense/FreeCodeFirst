const express=require("express")
const bodyParser=require("body-parser")
const { static } = require("express");
const app=express()

// routes
const indexRoutes=require("./routes/index")
app.use(indexRoutes)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.use(static("public"))

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
app.get("/",(req,res)=>{
    res.sendfile(__dirname+"/public/index.html")
})

module.exports={
    app,
}