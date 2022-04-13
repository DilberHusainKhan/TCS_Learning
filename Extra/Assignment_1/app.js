let calc = require('./calculator');

let clargs = process.argv;
let one = parseInt(clargs[2]);
let two = parseInt(clargs[3]);

calc.add(one, two);
calc.sub(one, two);
calc.mul(one, two);



