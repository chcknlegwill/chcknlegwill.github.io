//root file for different routes
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.redirect(301, "/index")
});

module.exports = router;