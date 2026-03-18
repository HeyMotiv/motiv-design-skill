const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = path.join('/Users/tmcmennamin/Documents/GitHub/motiv-design-skill/docs/examples/User Collab Details - updated design');
const port = process.env.PORT || 8767;
http.createServer((req, res) => {
  let url = decodeURIComponent(req.url === '/' ? '/state-4b-progress-weekly-video-updated.html' : req.url);
  let fp = path.join(dir, url);
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end('Not found'); return; }
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(fp).pipe(res);
}).listen(port, () => console.log('Serving collab details on ' + port));
