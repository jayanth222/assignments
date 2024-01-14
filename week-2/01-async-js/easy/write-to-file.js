const fs=require("fs");

let data="hello this is a again aaaaaaaaaaa";
const fName='F:/COHORT/assignments/week-2/01-async-js/easy/a.txt';
fs.appendFile(fName,data,function (err){
    if(err){
        console.log(err);
    }
})