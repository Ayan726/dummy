const { log } = require('console')
const os = require('os')

// info about current user
const user = os.userInfo()

console.log(user);

// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} sec`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);