const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const paragraph = (__dirname, "..", "/", "public", "txt", "index_paragraph.txt");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"));
})

module.exports = router;