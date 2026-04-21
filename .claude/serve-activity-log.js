const http = require('http');
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '../docs/examples/Follower/2 User Collab Details - updated design/metric-variants/activity-log-variants.html');

http.createServer((req, res) => {
    fs.readFile(FILE, (err, data) => {
        if (err) { res.writeHead(500); res.end('Error'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(process.env.PORT || 8781);
