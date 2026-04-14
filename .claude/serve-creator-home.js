const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const baseDir = path.join(__dirname, '..', 'docs', 'examples', 'Creator', 'Creator Home');

http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const state = parsed.query.state || 'first-time';
  const filePath = path.join(baseDir, `collab-${state}.html`);

  try {
    const html = fs.readFileSync(filePath, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } catch (e) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`File not found: collab-${state}.html\nAvailable: ?state=first-time, ?state=needs-dates, ?state=needs-verify, ?state=dates-expired, ?state=live, ?state=live-multi, ?state=live-returning, ?state=between, ?state=sections`);
  }
}).listen(8771, () => console.log('Serving creator home on http://localhost:8771?state=first-time'));
