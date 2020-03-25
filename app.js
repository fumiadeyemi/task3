var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('fumi.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

  fs.writeFile('message.txt', 'Message Content!', function (err) {
    if (err) throw err;
  });
}).listen(8080);