var express = require("express");
var path = require("path");

var app = express();

app.get("*", function (req, res) {
  res
    .set("Retry-After", 21600)
    .status(503)
    .sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 3000);
