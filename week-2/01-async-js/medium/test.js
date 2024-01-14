// const fs=require("fs");
// const fName="F:/COHORT/assignments/week-2/01-async-js/medium/b.txt";
// let fData=fs.readFileSync(fName,"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
// });
// console.log(fData+" this is fdata");

setInterval(function(){
    const date=new Date();
    console.log(date.getHours()+" "+date.getMinutes()+" "+date.getSeconds());
},1000)