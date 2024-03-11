const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");


//this funciton logs events with a unique id
const logEvents = async (message) => {
	const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
	const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
	const logConsole = `${message}`
	//console.log(logItem); //logs any requests to the console
	try { //checks if the folder "../logs" exists, if not then makes the folder with .mkdir
		if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
			await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
		};
		await fsPromises.appendFile(path.join(__dirname, "..", "logs", "reqLog.txt"), logItem); //if folder exists, log to the file
	} catch (err) {
		console.log(err);
	};
};
//dont need uuid in this log file - need to change this.



//         await fsPromises.appendFile(path.join(__dirname, "..", "logs", "eventLog.txt"), logItem);
// above is a scrap incase this doesnt work -> only temporary

//I am seperating this into two functions becuse it improves readability in both server.js and this file
//This means that the code can be re-used for anything that needs to be logged on the server e.g. logins
const logger = ((req, res, next) => {
	logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`);
	//console.log(`${req.method} ${req.path}`);
	next();
});

module.exports = { logger, logEvents };

/* //old
const logger = ((req, res, next) => {
		logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
		//console.log(`${req.method} ${req.path}`);
		next();
});
*/

/* below code is just to test out modules (uuid, date-nfs)
console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"))

console.log(uuid())

console.log()
*/
