const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
//const { format } = require("date-fns");

const app = express();
const PORT = process.env.PORT || 3500;
//^lil trick I learned ;)
//

app.use((req, res, next) => {
    //const logEntry = `${format(new Date(), "yyyy-MM-dd HH:mm:ss")} - ${uuidv4()} - ${req.method} ${req.path}\n`
    fs.appendFile("logs/request_logs.txt", "logappend", (err) => {
        if (err) throw err;
        console.log("Log entry added.");
    });
    next();
})

app.use(express.static("html"));
app.use(express.static("css"));

app.get((req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/html/404.html");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost@${PORT}`)
})