const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const filePath = path.join(__dirname, '..', 'docs', 'examples', 'Creator', 'Collab Creation', 'creator-collab-creation-flow.html');
const html = fs.readFileSync(filePath, 'utf8');

http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const screenParam = parsed.query.screen;
  const modal = parsed.query.modal; // photo-sheet, photo-toast, permissions, title-edit

  if (screenParam === undefined) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }

  const screenIndex = parseInt(screenParam);
  let modified = html;

  // === MODAL-SPECIFIC STYLES ===
  let modalStyles = '';
  let modalInitScript = '';

  if (modal === 'photo-sheet') {
    // Show the iOS action sheet overlay
    modalStyles = `
      .action-sheet-overlay {
        display: flex !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }
      .action-sheet-overlay .action-sheet {
        transform: translateY(0) !important;
      }
    `;
  } else if (modal === 'photo-toast') {
    // Show the "Photo updated" toast on the preview card
    modalStyles = `
      .photo-toast {
        opacity: 1 !important;
        transform: translate(-50%, -50%) scale(1) !important;
        pointer-events: auto !important;
      }
    `;
  } else if (modal === 'permissions') {
    // Inject an iOS-style photo permissions dialog
    modalStyles = `
      .ios-permissions-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.35);
        z-index: 300;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 28px;
      }
      .ios-permissions-dialog {
        background: rgba(255,255,255,0.97);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        border-radius: 14px;
        width: 100%;
        max-width: 270px;
        text-align: center;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0,0,0,0.18);
      }
      .ios-permissions-body {
        padding: 20px 16px 0;
      }
      .ios-permissions-icon {
        width: 56px;
        height: 56px;
        margin: 0 auto 12px;
        background: linear-gradient(135deg, #FFD60A 0%, #FF9500 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ios-permissions-icon .material-icons {
        font-size: 30px;
        color: white;
      }
      .ios-permissions-title {
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'DM Sans', sans-serif;
        font-size: 17px;
        font-weight: 600;
        color: #1C1C1E;
        margin-bottom: 6px;
        line-height: 1.25;
      }
      .ios-permissions-message {
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'DM Sans', sans-serif;
        font-size: 13px;
        color: #3C3C43;
        opacity: 0.7;
        line-height: 1.45;
        margin-bottom: 18px;
      }
      .ios-permissions-actions {
        border-top: 0.5px solid rgba(60,60,67,0.2);
        display: flex;
        flex-direction: column;
      }
      .ios-permissions-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 11px 16px;
        border: none;
        background: transparent;
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'DM Sans', sans-serif;
        font-size: 17px;
        color: #007AFF;
        cursor: pointer;
      }
      .ios-permissions-btn + .ios-permissions-btn {
        border-top: 0.5px solid rgba(60,60,67,0.2);
      }
      .ios-permissions-btn.bold {
        font-weight: 600;
      }
      .ios-permissions-btn.secondary {
        font-weight: 400;
      }
    `;
    // Inject the permissions dialog HTML before closing </div><!-- /phone-frame -->
    const permissionsHtml = `
      <div class="ios-permissions-overlay">
        <div class="ios-permissions-dialog">
          <div class="ios-permissions-body">
            <div class="ios-permissions-icon">
              <span class="material-icons">photo_library</span>
            </div>
            <div class="ios-permissions-title">"Motiv" Would Like to Access Your Photos</div>
            <div class="ios-permissions-message">This lets you set a cover photo for your collab.</div>
          </div>
          <div class="ios-permissions-actions">
            <button class="ios-permissions-btn bold">Allow Full Access</button>
            <button class="ios-permissions-btn secondary">Select Photos…</button>
            <button class="ios-permissions-btn secondary">Don't Allow</button>
          </div>
        </div>
      </div>
    `;
    modified = modified.replace('</div><!-- /phone-frame -->', permissionsHtml + '</div><!-- /phone-frame -->');
  } else if (modal === 'camera-denied') {
    // In-app "Camera Access Needed" modal when permission was previously denied
    modalStyles = `
      .camera-denied-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.45);
        z-index: 300;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px 20px;
      }
      .camera-denied-dialog {
        background: var(--color-bg-primary);
        border-radius: 20px;
        width: 100%;
        max-width: 340px;
        text-align: center;
        overflow: hidden;
        box-shadow: 0 12px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
        padding: 32px 24px 24px;
      }
      .camera-denied-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 20px;
        background: var(--color-blush);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .camera-denied-icon .material-icons {
        font-size: 28px;
        color: var(--color-clay);
      }
      .camera-denied-title {
        font-family: var(--font-headline);
        font-size: 22px;
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: 8px;
        line-height: 1.25;
      }
      .camera-denied-message {
        font-family: var(--font-body);
        font-size: 15px;
        color: var(--color-text-secondary);
        line-height: 1.5;
        margin-bottom: 24px;
      }
      .camera-denied-steps {
        text-align: left;
        background: var(--color-bg-secondary);
        border-radius: 12px;
        padding: 16px 18px;
        margin-bottom: 24px;
      }
      .camera-denied-steps-label {
        font-family: var(--font-body);
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--color-text-tertiary);
        margin-bottom: 12px;
      }
      .camera-denied-step {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 0;
      }
      .camera-denied-step + .camera-denied-step {
        margin-top: 4px;
      }
      .camera-denied-step-num {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: var(--color-clay);
        color: white;
        font-family: var(--font-body);
        font-size: 13px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .camera-denied-step-text {
        font-family: var(--font-body);
        font-size: 15px;
        color: var(--color-text-primary);
        line-height: 1.35;
      }
      .camera-denied-step-text strong {
        font-weight: 700;
      }
      .camera-denied-btn-settings {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        padding: 16px;
        border-radius: var(--radius-full);
        font-family: var(--font-body);
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        background: var(--color-text-primary);
        color: white;
      }
      .camera-denied-btn-settings .material-icons {
        font-size: 20px;
      }
      .camera-denied-btn-dismiss {
        display: block;
        width: 100%;
        margin-top: 12px;
        padding: 10px;
        background: none;
        border: none;
        font-family: var(--font-body);
        font-size: 15px;
        font-weight: 500;
        color: var(--color-text-tertiary);
        cursor: pointer;
        text-align: center;
      }
    `;
    const cameraDeniedHtml = `
      <div class="camera-denied-overlay">
        <div class="camera-denied-dialog">
          <div class="camera-denied-icon">
            <span class="material-icons">no_photography</span>
          </div>
          <div class="camera-denied-title">Camera Access Needed</div>
          <div class="camera-denied-message">Motiv needs access to your camera to take a cover photo for your collab. You previously denied this permission.</div>
          <div class="camera-denied-steps">
            <div class="camera-denied-steps-label">How to enable</div>
            <div class="camera-denied-step">
              <div class="camera-denied-step-num">1</div>
              <div class="camera-denied-step-text">Open <strong>Settings</strong> on your iPhone</div>
            </div>
            <div class="camera-denied-step">
              <div class="camera-denied-step-num">2</div>
              <div class="camera-denied-step-text">Scroll down and tap <strong>Motiv</strong></div>
            </div>
            <div class="camera-denied-step">
              <div class="camera-denied-step-num">3</div>
              <div class="camera-denied-step-text">Toggle on <strong>Camera</strong></div>
            </div>
            <div class="camera-denied-step">
              <div class="camera-denied-step-num">4</div>
              <div class="camera-denied-step-text">Return to Motiv and try again</div>
            </div>
          </div>
          <button class="camera-denied-btn-settings">
            <span class="material-icons">settings</span>
            Open Settings
          </button>
          <button class="camera-denied-btn-dismiss">Not now</button>
        </div>
      </div>
    `;
    modified = modified.replace('</div><!-- /phone-frame -->', cameraDeniedHtml + '</div><!-- /phone-frame -->');
  } else if (modal === 'title-edit') {
    // Show the inline title edit overlay
    modalStyles = `
      .title-edit-overlay {
        display: flex !important;
      }
    `;
  } else {
    // Default: hide action sheet
    modalStyles = `
      .action-sheet-overlay {
        display: none !important;
      }
    `;
  }

  // Base phone-frame override styles
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
        height: ${modal ? '844px' : 'auto'} !important;
        min-height: auto !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        overflow: ${modal ? 'hidden' : 'visible'} !important;
      }
      .phone-scroll {
        overflow: ${modal ? 'hidden' : 'visible'} !important;
        flex: ${modal ? '1' : 'none'} !important;
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
        position: ${modal ? 'absolute' : 'relative'} !important;
        background: ${modal ? 'linear-gradient(transparent 0%, var(--color-bg-primary) 20%)' : 'var(--color-bg-primary)'} !important;
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
      /* For date screen, show skip button */
      ${screenIndex === 2 ? `
        #skipDateBtn {
          display: block !important;
        }
      ` : ''}
      /* Modal-specific overrides */
      ${modalStyles}
    </style>
  `;

  modified = modified.replace('</head>', styleOverride + '</head>');

  // Init script
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
