var express = require('express');
var app = express();
var bodyParse = require('body-parser')

// middleware
app.use(express.static(__dirname));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}))

//dummy data
var messages = [
    {name :"Dilber Husain Khan",message:"hello sir"},
    {name:"Humayun Anwar Khan", message:"hey there"}
]

//get request
app.get('/messages',(req,res)=>{
    res.send(messages)
})

//post request
app.post('/messages',(req,res)=>{
    messages.push(req.body)               
    console.log(req.body);
    res.sendStatus(200)
})

var server = app.listen(3000,()=>{
    console.log("Server is runninng on port number",server.address().port);
})
