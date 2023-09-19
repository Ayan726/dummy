const eventEmitter = require("events")

const customEmitter = new eventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ${name} ${id}`);
})
customEmitter.on('response', () => {
    console.log(`brooo`);
})

customEmitter.emit('response', 'john', '123')