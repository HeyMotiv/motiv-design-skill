const http = require('http');
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'docs', 'examples', 'Creator', 'Creator Collab Details', 'creator-collab-dashboard-view-toggle.html');

http.createServer((req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); res.end('Error'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}).listen(8769, () => console.log('Serving view-toggle on http://localhost:8769'));
