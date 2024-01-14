const fs=require("fs");
const fName="F:/COHORT/assignments/week-2/01-async-js/medium/b.txt";
let fData=fs.readFileSync(fName,"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
});
let bool=false;
fData=fData.trim();
let ans="";
for(let i=0;i<fData.length;i++){
    if(fData[i]===' '&&bool)
    continue;
    else if(fData[i]===' '&&!bool){
        ans+=' ';
        bool=true;
        continue;
    }
    else{
        ans+=fData[i];
        bool=false
    }
}
fs.writeFile(fName,ans,(err)=>{
    if(err){
        console.log(err);
    }
});