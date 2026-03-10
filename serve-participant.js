const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'docs', 'examples', 'Participant Onboarding');
const port = process.env.PORT || 8766;
http.createServer((req, res) => {
  let url = decodeURIComponent(req.url === '/' ? '/participant-onboarding-flow.html' : req.url);
  let fp = path.join(dir, url);
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end('Not found'); return; }
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(fp).pipe(res);
}).listen(port, () => console.log('Serving on ' + port));
