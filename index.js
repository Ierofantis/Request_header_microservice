var express = require('express');
var app = express();

app.get('/', function (req, res) {

  res.json({
        ipaddress: req.headers['x-forwarded-for'] ||
                   req.connection.remoteAddress,
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
    });
  

   
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})
