// NET101 實做一個超簡易 HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    res.write('welcome');
    res.end();
    return;
  }

  if (req.url === '/hello') {
    res.write('hello');
    res.end();
    return;
  }

  if (req.url === '/redirect') {
    res.writeHead(302, {
      Location: '/hello',
    });
    res.end();
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(5000);
