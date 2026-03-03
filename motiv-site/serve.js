const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'motiv-deploy');
const port = 8767;

http.createServer((req, res) => {
  let filePath = path.join(dir, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': types[ext] || 'text/html' });
    res.end(data);
  });
}).listen(port, () => console.log(`Serving on http://localhost:${port}`));
