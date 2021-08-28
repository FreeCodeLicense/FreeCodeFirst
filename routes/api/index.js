const express=require("express")
const router=express.Router()

router.get("/:date?",(req,res)=>{
    let date=parseInt(req.params.date)
    let utcDate=new Date(date)
    res.send({ unix:date, utc: utcDate.toUTCString() })
})


module.exports=router
