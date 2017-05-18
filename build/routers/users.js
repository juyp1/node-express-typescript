"use strict";
const express = require("express");
let router = express.Router();
router.all('/list', function (req, res) {
    console.log();
    res.send('hello 我是typescript版本的Express');
});
module.exports = router;
