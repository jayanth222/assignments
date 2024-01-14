const fs = require("fs");

const fName="F:\\COHORT\\assignments\\week-2\\01-async-js\\easy\\a.txt";
// or use below path
const fName2='F:/COHORT/assignments/week-2/01-async-js/easy/a.txt'
fs.readFile(fName2,"utf-8",function(err,data){
    if(err){
        console.error('error',err);
        return;
    }
    console.log(data);
    console.log("reading file");
});

let a=0;
for(let i=0;i<100000000;i++){
    a+=i;
}