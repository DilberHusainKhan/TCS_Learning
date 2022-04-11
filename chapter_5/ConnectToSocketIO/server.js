var express = require('express');
var app = express();
var bodyParse = require('body-parser');
const Socket  = require('socket.io');
var http = require('http').Server(app)
var io = require('socket.io')(http)
const ConnectDB = require('./DBconnection');
const  mongoose = require('mongoose');
// middleware
app.use(express.static(__dirname));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}))

//dummy data
// var messages = [
//     {name :"Dilber Husain Khan",message:"hello sir"},
//     {name:"Humayun Anwar Khan", message:"hey there"}
// ]

//get request
app.get('/messages',(req,res)=>{
    Message.find({},(err, messages)=>{
        res.send(messages)
    })
    
})
// 
var Message = mongoose.model('message',{
    name:String,
    message:String
})
//post request
app.post('/messages',(req,res)=>{
    var message = new Message(req.body)
    message.save((err)=>{
        if(err){
            sendStatus(500)        
        }
            io.emit('message',req.body)               
        console.log(req.body);
        res.sendStatus(200)
    })})

io.on('connection',(Socket)=>{
    console.log('a new user added');
})
ConnectDB();

var server = http.listen(3000,()=>{
    console.log("Server is runninng on port number",server.address().port);
})
