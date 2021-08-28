require("dotenv").config()
const { app }=require("../index")

app.listen(process.env.PORT || 3000,function (){
    console.log("Sever started on port 3000")
})