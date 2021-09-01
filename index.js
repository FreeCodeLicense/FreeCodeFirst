const express=require("express")
const bodyParser=require("body-parser")
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(express.static("public"))

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));


// routes
const indexRoutes=require("./routes/index")
app.use(indexRoutes)

// api routes
// const timestampRoutes=require("./routes/api/index")
// app.use("/api",timestampRoutes)
const headerParser=require("./routes/api/headerParser")
app.use("/api",headerParser)

const exerciseTracer=require("./routes/api/exerciseTracker")
app.use("/api",exerciseTracer)

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