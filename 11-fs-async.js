const { readFile, writeFile } = require('fs')
console.log('start');

readFile('./content/first.txt', 'utf8', (err, res) => {
    if(err){
        console.log(err)
        return
    }

    const first = res;

    readFile('./content/second.txt', 'utf8', (err, res) => {
        if(err){
            console.log(err)
            return
        }
        const second = res;

        writeFile('./content/result-async.txt', `the result is ${first}, ${second}`, (err, res) => {
            if(err){
                console.log(err);
                return
            }
            console.log('done with this');
        })

    })
})

console.log('starting new task');




// const { readFile, writeFile } = require('fs').promises;
// // const util = require('util')

// // const readFilePromise = util.promisify(readFile)
// // const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     try{
//         const first = await readFile('./content/first.txt', 'utf8')
//         const second = await readFile('./content/second.txt', 'utf-8')
//         await writeFile('./content/res-mind-grenade.txt', 'this is our grenade ohh yea')
//         console.log(first, second);
//     } catch(err){
//         console.log(err);   
//     }
// }

// start()

//         // const getText = (path) => {
//         //     return new Promise((resolve, reject) => {
//         //         readFile(path, "utf8", (err, res) => {
//         //             if(err)reject(err)
//         //             else resolve(res)
//         //         })
//         //     })
//         // }
        
//         // getText('./content/first.txt')
//         // .then(res => console.log(res))
//         // .catch(err => console.log(err))
