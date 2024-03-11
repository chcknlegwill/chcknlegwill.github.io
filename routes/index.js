const express = require("express");
const router = express.Router();
const path = require("path");
const { __esModule } = require("uuid");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"))
})

module.exports = router;