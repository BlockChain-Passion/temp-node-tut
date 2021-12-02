// Modules
//  this data is now fetched from the 04-names file
// const secret = 'Super Secret'
// const jhon = 'jhon'
// const peter = 'peter'

// 05-utils.js files
// var sayHi =(name)=>{
//     console.log(`Hello there ${name}`);
// }

var names = require('./04-names')
var sayHi = require('./05-utlis')
var data1 = require('./06-Alternate-export')
// var v3 = require('./07-mind-grenade')
require('./07-mind-grenade')

sayHi('Arun Upadhyay')
sayHi(names.jhon)
sayHi(names.peter)
console.log(data1);
// v3.addValues  need to check 
