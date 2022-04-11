fs = require('fs');
//synchronous  ::- print data & name in same order
console.log('Synchronous');
data = fs.readdirSync('C:/');  //main sync
console.log('data:', data);
console.log("Dilber Husain Khan");
//----------

// Asynchronous :- print according to time . or ||
console.log('Asynchronous');

function mydata(err, data) {
    console.log('data:', data);
}
fs.readdir('c:/',mydata);
console.log("Humayun Anwar Khan");
