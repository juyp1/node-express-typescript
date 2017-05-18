"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routers/users");
const app = express();
app.use(bodyParser.json());
//query string类型的代码
app.use(bodyParser.urlencoded({
    extended: false
}));
//静态资源
app.use(express.static(__dirname + '/public'));
app.use('/user', router);
app.listen(3000);
