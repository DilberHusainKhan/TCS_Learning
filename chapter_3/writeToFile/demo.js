var fs = require('fs')
var data ={
    name :"Humayun Anwar Khan"
}
var StringData = JSON.stringify(data) //without this output will be [OBJECT,OBJECT]
fs.writeFile('data.json',StringData,(err)=>{    //path , data , callback
    console.log("finished with " ,err);
})