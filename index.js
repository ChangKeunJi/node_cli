#!/usr/bin/env node

const fs = require('fs');
// process module automatically injected in Global Object

// fs.readdir(path, (err,fine names ))
fs.readdir(process.cwd(), (err, filenames) => {
    
    // err === an error object, which means something went wrong
    // err === null, which means everything is fine.

    if(err) {
        // error handling codes..
        console.log(err);
        throw new Error(err); 
    }
    
    console.log(filenames);
    
    //! Bad Code here!
    //: Output order is not always same.

    const allStats = Array(filenames.length).fill(null);

    for (let filename of filenames) {

        const index = filenames.indexOf(filename);

        fs.lstat(filename,(err,stats) => {
            if(err) {
                console.log(err);
            }

            allStats[index] = stats;

            const ready = allStats.every((stats) =>   {
                return stats;
            });
            //: If array is fully filled with stats object.

            if(ready) {
                allStats.forEach((stats,index) => {
                    // index : index of array allStats
                    console.log(filenames[index],stats.isFile());

                })
            }

        })

    }

});

// 1. Create package.json file w 'bin' section
// 2. Change index.js file permissions 
// => chmod +x index.js ( in terminal )
// 3. Add comment to index.js file to allow it to executable
// => #!/usr/bin/env node ( on top of file)
// 4. Link out project
// => npm link ( in terminal, ) : Make it available to anywhere
//: window 터미널에서 관리자 권한 실행 후 npm link 입력.
