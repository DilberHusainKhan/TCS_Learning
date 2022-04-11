const mongoose = require('mongoose')
const URI= 'mongodb+srv://dbUser:dbUser@cluster0.3noqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//function
const ConnectDB = async()=>{
    await mongoose.connect(URI);
    console.log("Database is connected");
}
//export
module.exports = ConnectDB;