//file system module
//async and sync are two types

// here we are covering the sync file system 

const {readFileSync, writeFileSync} = require('fs')

console.log('*****start');

const firstFile = readFileSync('./content/first.txt','utf8');
const secondFile = readFileSync('./content/second.txt','utf8');

console.log(firstFile)
console.log(secondFile)

console.log('*****need to being with new task');

writeFileSync('./content/newFile.txt',
`here is the sample :- ${firstFile}. Here comes the secondFile :- ${secondFile}`,
{flag :'a'})

console.log('*****Task got completed');