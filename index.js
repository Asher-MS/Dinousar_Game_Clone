const express = require("express");

const server = express();
let port=process.env.PORT || 3000;
server.listen(port, function () {
  console.log("The Server is up and Running");
});

server.use(express.static(__dirname + "/public"));
