const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = '/Users/tmcmennamin/Documents/GitHub/motiv-design-skill/docs/examples/Creator Collab Details';
const port = 8765;

http.createServer((req, res) => {
  let filePath = path.join(dir, req.url === '/' ? 'creator-collab-creation-flow.html' : req.url);
  const ext = path.extname(filePath);
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png', '.jpg': 'image/jpeg' };

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': types[ext] || 'text/html' });
    res.end(data);
  });
}).listen(port, () => console.log(`Serving on http://localhost:${port}`));
