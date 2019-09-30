var http = require('http');
var dt = require('./module1.js'); // importig other modules

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});//http header
  //res.write("The date and time are currently: " + dt.myDateTime());
  res.write(req.url);
  res.end();
  //res.end('Hello World!');
}).listen(8081);
