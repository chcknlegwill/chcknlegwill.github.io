const { log } = require("console");
const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "blog.html"))
});
router.get("/First", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "blog", "First.html"))
})
router.get("/winLinMac", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "blog", "winLinMac.html"))
})

module.exports = router;