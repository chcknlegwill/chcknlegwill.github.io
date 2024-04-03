const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("node:fs");

const paragraph = (path.join(__dirname, "..", "public", "txt", "index_paragraph.txt"));
//this works but I need it on the frontend, not the backend
//going to add the .txt directly to html instead and see if that works


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"));
})
module.exports = router;