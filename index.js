const express=require('express')

const app=express()



app.get('/',(req,res)=>{
    res.status(200).json({message:'api done'})
})

app.listen(8000,()=>console.log("server is running"))
