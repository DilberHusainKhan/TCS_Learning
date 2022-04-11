var express = require('express')
var bodyParser = require('body-parser')
const {Socket} = require('socket.io')
var app = express();

var http = require('http').Server(app)
var io = require('socket.io')(http)

// middleware
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// dummy data
var messages = [
    {name:"Dilber Husain", message:" hello sir"},
    {name:"Humayun Ibne Anwar ", message:" hey there"}
]

// get request
app.get('/messages',(req,res)=>{
    res.send(messages)
})

// post request
app.post('/messages',(req,res)=>{
    messages.push(req.body)
    io.emit('message', req.body)
    console.log(req.body)
    res.sendStatus(200)
})

io.on('connection',(Socket)=>{
    console.log('a new user added');
})


var server = http.listen(3000,()=>{
    console.log("Server is running on localhost:",server.address().port);
})