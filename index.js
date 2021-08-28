const express=require("express")
const bodyParser=require("body-parser")
const app=express()

// routes
const indexRoutes=require("./routes/index")
app.use(indexRoutes)

// api routes
const timestampRoutes=require("./routes/api/index")
app.use("/api/:date?",(req,res,next)=>{
    let regEx=/^[0-9]+$/
    let date=req.params.date || null

    if(!date){
        let date=Date.now()
        let utcDate=new Date(date)
        return res.send({ unix:date, utc: utcDate.toUTCString() })
    }

    if(regEx.test(date)){
        next()
    } else {
        res.send({ error : "Invalid Date" })
    }
})
app.use("/api",timestampRoutes)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.use(express.static("public"))

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