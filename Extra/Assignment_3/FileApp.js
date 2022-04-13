const { Console } = require('console');
let fs = require('fs');

let input = process.argv;
let file = input[2];
// asynchronously
// let start = fs.readFileSync(input[2], "utf-8");
// console.log(start);


// synchronously

fs.readFile(input[2], "utf-8", function (err, data) {
    if (err != null) {
        console.log(err);
    } else {
        console.log(data);
    }
});