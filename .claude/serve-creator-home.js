const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const baseDir = path.join(__dirname, '..', 'docs', 'examples', 'Creator', 'Creator Home');

http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const state = parsed.query.state || 'first-time';
  const filePath = path.join(baseDir, `home-${state}.html`);

  try {
    const html = fs.readFileSync(filePath, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } catch (e) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`File not found: home-${state}.html\nAvailable: ?state=first-time, ?state=needs-dates`);
  }
}).listen(8771, () => console.log('Serving creator home on http://localhost:8771?state=first-time'));
