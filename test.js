#!/usr/bin/env node

const fs = require('fs');
// process module automatically injected in Global Object

// fs.readdir(path, (err,fine names ))
fs.readdir(process.cwd(), (err, fileNames) => {
    
    // err === an error object, which means something went wrong

    if(err) {
        // error handling codes..
        console.log(err);
        throw new Error(err); 
    }
    console.log('hello');
    console.log(fileNames);
    
    // err === null, which means everything is fine.

});

