//file system module
//async and sync are two types

// here we are covering the async file system 
// we use here callback function when we are done with our functionality been implemented.

const {readFile, writeFile} = require('fs')

console.log('*****start');

readFile('./content/first.txt','utf-8',(err,data)=>{
    if(err){ console.log(err);return;}
    console.log(data);
    const first = data
 
    readFile('./content/second.txt','utf8',(err,data)=>{
        if(err!=null){console.log(err);return;}
        console.log(data);
        const second = data
        writeFile('./content/newAsyncFile.txt',`Here is the data:- ${first}. Data From 2nd File :- ${second}`,
        {flag:'a'},
        (err,data)=>{
            if(err){console.log('Data getting written in the file. Error occured.',data);return;}
            console.log(data);
            console.log('*****need to being with new task');
        })
    })
    
})

console.log('*****Task got completed');
