const http = require('http');
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'docs', 'examples', 'Creator', 'Creator Collab Details', 'creator-collab-dashboard-3-week4.html');

http.createServer((req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); res.end('Error'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}).listen(8773, () => console.log('Serving week4 on http://localhost:8773'));
