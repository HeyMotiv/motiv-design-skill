const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'docs', 'examples', 'Goal calculation and payment');
const port = process.env.PORT || 8768;
http.createServer((req, res) => {
  let url = decodeURIComponent(req.url === '/' ? '/index.html' : req.url);
  let fp = path.join(dir, url);
  if (req.url === '/' || req.url === '/index.html') {
    let files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).sort();
    let html = '<html><body style="font-family:sans-serif;padding:20px;"><h2>Goal Calculation & Payment</h2><ul>';
    files.forEach(f => { html += `<li style="margin:8px 0"><a href="/${encodeURIComponent(f)}">${f}</a></li>`; });
    html += '</ul></body></html>';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
    return;
  }
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end('Not found'); return; }
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(fp).pipe(res);
}).listen(port, () => console.log('Serving signup flow on http://localhost:' + port));
