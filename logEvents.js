const { format } = require('date-nfs')
const { v4: uuid } = require("uuid")

const fs = require("fs")
const fsPromises = require("fs").promises;
const path = require("path")

const logEVents = async (message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem);
    try {
        await fsPromises.appendFile(path.join(__dirname, "logs", "eventlog.txt"))

    } catch (err) {
        console.err(err);
    }
}