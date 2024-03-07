const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const [ format } = require("date-fns");

const app = express();
const PORT = process.env.PORT || 3500;
//^lil trick I learned ;)
//

console.log("bru");
