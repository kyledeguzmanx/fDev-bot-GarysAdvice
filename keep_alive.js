var http = require('http');

http.createServer(function (req, res) {
  res.write("Server is live");
  res.end();
}).listen(8080);
