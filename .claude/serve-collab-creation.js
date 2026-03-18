const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const filePath = path.join(__dirname, '..', 'docs', 'examples', 'Creator', 'Collab Creation', 'creator-collab-creation-flow.html');
const html = fs.readFileSync(filePath, 'utf8');

http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const screenParam = parsed.query.screen;

  if (screenParam === undefined) {
    // Serve original file
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }

  const screenIndex = parseInt(screenParam);

  // Build a modified version that:
  // 1. Removes phone-frame constraints (no fixed width/height, no border-radius, no overflow hidden)
  // 2. Shows only the requested screen
  // 3. Shows the launch overlay for screen=4
  let modified = html;

  // Override phone-frame styles to remove constraints
  const styleOverride = `
    <style>
      body {
        background: white !important;
        padding: 0 !important;
        margin: 0 !important;
        min-height: auto !important;
      }
      .phone-frame {
        width: 390px !important;
        height: auto !important;
        min-height: auto !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        overflow: visible !important;
      }
      .phone-scroll {
        overflow: visible !important;
        flex: none !important;
      }
      .screen {
        display: none !important;
      }
      .screen[data-screen="${screenIndex === 4 ? 3 : screenIndex}"] {
        display: flex !important;
      }
      .screen-body {
        padding-bottom: 24px !important;
      }
      .bottom-bar {
        position: relative !important;
        background: var(--color-bg-primary) !important;
        ${screenIndex === 3 || screenIndex === 4 ? 'display: none !important;' : ''}
      }
      /* For launch overlay (screen 4) */
      ${screenIndex === 4 ? `
        .launch-overlay {
          display: flex !important;
          position: relative !important;
          min-height: 844px !important;
        }
        .phone-scroll, .status-bar, .wizard-nav, .bottom-bar {
          display: none !important;
        }
      ` : `
        .launch-overlay {
          display: none !important;
        }
      `}
      /* Action sheet - show it on screen 0 variant */
      .action-sheet-overlay {
        display: none !important;
      }
      /* For date screen, show skip button */
      ${screenIndex === 2 ? `
        #skipDateBtn {
          display: block !important;
        }
      ` : ''}
    </style>
  `;

  // Insert the override styles right before </head>
  modified = modified.replace('</head>', styleOverride + '</head>');

  // Add auto-init script to trigger screen setup
  const initScript = `
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        ${screenIndex === 3 ? 'if (typeof updateReview === "function") updateReview();' : ''}
        ${screenIndex === 2 ? 'if (typeof renderCalendar === "function") renderCalendar();' : ''}
        if (typeof updatePreview === 'function') updatePreview();
      });
    </script>
  `;
  modified = modified.replace('</body>', initScript + '</body>');

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(modified);
}).listen(8770, () => console.log('Serving collab creation flow on http://localhost:8770'));
