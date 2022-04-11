var fs = require('fs');
var data  = require('./data.json')
console.log(data.name);

// output of (data)  --->{ name: 'Dilber Husain Khan' }
//output of (data.name) --> Dilber Husain Khan

//without UTF-8
// fs.readFile('./data.json',(err,data)=>{
//     console.log(data);
// })
// output
// <Buffer 7b 0d 0a 20 20 20 20 22 6e 61 6d 65 22 3a 22 44 69 6c 62 65 72 20 48 75 73 61 69 6e 20 4b 68 61 6e 22 0d 0a 7d>



fs.readFile('./data.json','utf-8',(err,data)=>{
    var data = JSON.parse(data)
    console.log(data.name);
})
// output with utf-8, (data)-->
// {
//     "name":"Dilber Husain Khan"
// }
// data.name --> undefine because it is not an object it is a string we need to parse it.
//now data.name --> Dilber Husain Khan