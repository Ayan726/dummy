const { writeFileSync } = require('fs')

for(let i=0; i<100000; ++i){
    writeFileSync('./content/bigfile.txt', 'utf8', "Hey This is a big file", {flag: 'a'})
}