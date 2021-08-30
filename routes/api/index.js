const express=require("express")
const router=express.Router()

router.get("/:date?",(req,res)=>{
    let dateStr=req.params.date || null

    if(!dateStr){
        return res.json({ unix:Date.now(), utc:(new Date(Date.now())).toUTCString() })
    }

    if(Date.parse(dateStr)){
        let time=Date.parse(dateStr)
        return res.json({ unix:time, utc:(new Date(time)).toUTCString() })
    }

    let regEx=/^[0-9]+$/
    if(regEx.test(dateStr)){
        let time=parseInt(dateStr)
        return res.json({ unix:time, utc:(new Date(time)).toUTCString() })
    }

    res.json({ error : "Invalid Date" })
})


module.exports=router
