const logEvents = require("./logEvents")

const eventEmitter = require("events")

class MyEmitter extends eventEmitter {};


//init object
const myEmitter = new MyEmitter(); 

//add listener
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
    MyEmitter.emit("log", "Log event emitted")
}, 2000)