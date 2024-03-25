const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { format } = require("date-fns");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3500;
// declaring global variables


const { logger } = require("./middleware/logEvents");

app.use(logger);

app.use(express.json());

app.use(express.static(path.join(__dirname, "/")));


app.use("/", require("./routes/root.js"));

app.use("/index", require("./routes/index.js"));

app.use("/blog", require("./routes/blog.js"));

app.use("/projects", require("./routes/projects.js"));

app.all("*", (req, res) => {
    res.status(404)
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "public", "html", "404.html"));
    } else if (req.accepts("json")) {
        res.json({error: "404 Not Found"})
    } else {
        res.type("txt").send("404 Not Found")
    }
}); //handles all requests that are not handled with before.

//console.log(__dirname)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})