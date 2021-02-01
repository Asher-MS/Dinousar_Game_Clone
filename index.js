const express = require("express");

const server = express();

server.listen(3000, function () {
  console.log("The Server is up and Running");
});

server.use(express.static(__dirname + "/public"));
