const express =require("express");
const app=express();
const path=require("path");
const fs=require('fs');
app.get('/',(req,res)=>{
    res.send("hello there this is express running");
});
app.get('/files',(req,res)=>{
    fs.readdir(path.join(__dirname,'/files/'),(err,files)=>{
        if(err) res.status(500).json({error: `can't retrive files`});
        res.json(files);
    })
});
app.get('/files/:fileName',(req,res)=>{
    const filePath=path.join(__dirname,'./files/',req.params.fileName);
    fs.readFile(filePath,"utf-8",(err,data)=>{
        // if(err) res.sendStatustatus();
        res.send(data);
    })
})
app.listen(3000,(err)=>{
    if(err) console.log(err);
    console.log("server is up and running");
});