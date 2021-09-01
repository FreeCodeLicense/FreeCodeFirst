const express=require("express")
const router=express.Router()


router.get("/whoami",(req,res)=>{
    const lang=req.acceptsLanguages('ru','eng')

    res.json({
        ipaddress:req.ip,
        language:req.lang?req.lang:'eng',
        software:req.headers['user-agent']
    })
})

module.exports=router