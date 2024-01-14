const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//storage
let storage=[];

function getArray(){
  return storage.map((item)=>({id:item.id,title:item.title}))
}

//all todos
app.get('/todos',(req,res)=>{
  const arr=getArray();
  res.send(arr);
})


//middle ware to check if given id is valid or not
const checkIndex=(req,res,next)=>{
  const ID=parseInt(req.params.id)
  const index=storage.find(index=>index.id===ID);
  if(!index)
  res.sendStatus(404);
  req.vaildID=index;
  next();
}


//for a specific todo
app.get('/todos/:id',checkIndex,(req,res)=>{
  const vaildID=req.vaildID;
  res.send(vaildID);
})


//global middleware for errors
app.use((err,req,res,next)=>{
  if(err)
  return res.sendStatus(404);
})

app.post('/todos',(req,res)=>{
  const newTodo={
    id: Math.floor(Math.random()*1000000),
    title: req.body.title,
    description: req.body.description
  }
  storage.push(newTodo);
  res.status(201).json(newTodo);
})

app.post('/todos/:id',(req,res)=>{
  const index=storage.find(t=>t.id===parseInt(req.params.id));
  if(index===-1)
  res.status(404).send();
  storage[index].title=req.body.title;
  storage[index].description=req.body.description;
  res.json(storage[index]);
})

app.delete('/todos/:id',(req,res)=>{
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if ( index === -1) {
    res.status(404).send();
  }
  storage.splice(index,1);
  res.status(200).send();
})

app.listen(3000,(err)=>{
    console.log("server is up and running");
    if(err){
      console.log(err);
    }
});