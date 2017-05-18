"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
//====================
const server = http.createServer(function (request, response) {
    console.log("create a server...");
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello world,we use typescript to develop.');
    response.end();
});
server.listen(3000, function () {
    console.log("Server listening on port 3000");
    console.log("test...");
});
