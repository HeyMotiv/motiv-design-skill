const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const dir = path.join(__dirname, '..', 'docs', 'examples', 'Follower', '2 User Collab Details - updated design');
const port = process.env.PORT || 8780;

const STRIP_CSS = `
<style>
  body { background: var(--color-bg-primary, #F7F3FB) !important; padding: 0 !important; margin: 0 !important; min-height: auto !important; display: block !important; }
  .label, .sublabel { display: none !important; }
  .phone-frame {
    width: 390px !important;
    height: auto !important;
    min-height: 844px !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    margin: 0 !important;
  }
  .phone-scroll {
    overflow: visible !important;
    padding-bottom: 110px !important;
  }
  /* Make overlays also full-frame */
  .overlay { border-radius: 0 !important; }
</style>
`;

// Script to pre-open interactive states based on ?open= query param
const INTERACTIVE_SCRIPT = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const openState = params.get('open');
  if (!openState) return;

  const frame = document.querySelector('.phone-frame') || document;

  function openOverlay(id) {
    const el = frame.querySelector('#' + id);
    if (el) el.classList.add('open');
  }

  function openRulesAccordion() {
    // Directly show the rules body and rotate chevron
    const rulesBody = frame.querySelector('#rulesBody');
    if (rulesBody) rulesBody.style.display = 'block';
    // Also try clicking the header as fallback
    const headers = frame.querySelectorAll('.about-header');
    headers.forEach(h => {
      if (h.textContent.includes('Game Rules') && rulesBody && rulesBody.style.display === 'none') {
        h.click();
      }
    });
  }

  function switchTab(tabName) {
    // Directly toggle tab content visibility and active states
    const tabs = frame.querySelectorAll('.tab-btn');
    tabs.forEach(t => {
      if (t.textContent.trim().toLowerCase().includes(tabName.toLowerCase())) {
        // Set active
        tabs.forEach(tb => tb.classList.remove('active'));
        t.classList.add('active');
      }
    });
    // Show/hide tab content
    const ruleTab = frame.querySelector('#tab-rules');
    const faqTab = frame.querySelector('#tab-faqs');
    if (tabName.toLowerCase().includes('faq')) {
      if (ruleTab) ruleTab.style.display = 'none';
      if (faqTab) faqTab.style.display = 'block';
    } else {
      if (ruleTab) ruleTab.style.display = 'block';
      if (faqTab) faqTab.style.display = 'none';
    }
  }

  function scrollCarousel(index) {
    const carousel = frame.querySelector('.now-carousel');
    if (carousel) {
      const cards = carousel.children;
      if (cards[index]) {
        cards[index].scrollIntoView({ inline: 'start', block: 'nearest' });
      }
    }
  }

  function selectWeek(weekNum) {
    // Direct DOM manipulation for week selection
    const weekBtns = frame.querySelectorAll('.week-page-btn');
    weekBtns.forEach(b => {
      b.classList.remove('active');
      if (b.getAttribute('data-week') === String(weekNum)) b.classList.add('active');
    });
    const panels = frame.querySelectorAll('.details-week');
    panels.forEach(p => {
      p.classList.remove('active');
      p.style.display = 'none';
      if (p.getAttribute('data-week-panel') === String(weekNum)) {
        p.classList.add('active');
        p.style.display = 'block';
      }
    });
  }

  setTimeout(function() {
    switch(openState) {
      case 'rules':
        openRulesAccordion();
        break;
      case 'faqs':
        openRulesAccordion();
        setTimeout(() => switchTab('faq'), 100);
        break;
      case 'value':
        openOverlay('valueOverlay');
        break;
      case 'details':
        openOverlay('detailsOverlay');
        break;
      case 'video':
        openOverlay('videoOverlay');
        break;
      case 'feed':
        openOverlay('feedOverlay');
        break;
      case 'highfive':
        openOverlay('highfiveHistoryOverlay');
        break;
      case 'carousel1':
        scrollCarousel(0);
        break;
      case 'carousel2':
        scrollCarousel(1);
        break;
      case 'carousel3':
        scrollCarousel(2);
        break;
      case 'carousel4':
        scrollCarousel(3);
        break;
      case 'carousel5':
        scrollCarousel(4);
        break;
      case 'love-sheet':
        // Open the creator love bottom sheet
        var backdrop = frame.querySelector('#loveBackdrop');
        if (backdrop) backdrop.classList.add('visible');
        break;
      case 'love-sent':
        // Open the creator love sheet in "sent" confirmation state
        var backdrop2 = frame.querySelector('#loveBackdrop');
        var loveSheet = frame.querySelector('#loveSheet');
        if (backdrop2) backdrop2.classList.add('visible');
        if (loveSheet) loveSheet.classList.add('sent');
        // Populate sent confirmation
        var sentEmoji = frame.querySelector('#loveSentEmoji');
        var sentLabel = frame.querySelector('#loveSentEmojiLabel');
        var sentPreview = frame.querySelector('#loveSentPreview');
        if (sentEmoji) sentEmoji.textContent = '🔥';
        if (sentLabel) sentLabel.textContent = 'Fired up';
        if (sentPreview) {
          var review = frame.querySelector('#loveReview');
          sentPreview.textContent = '\u201C' + (review ? review.value : '') + '\u201D';
          sentPreview.style.display = '-webkit-box';
        }
        break;
      case 'details-week2':
        openOverlay('detailsOverlay');
        setTimeout(() => selectWeek(2), 100);
        break;
      case 'details-week3':
        openOverlay('detailsOverlay');
        setTimeout(() => selectWeek(3), 100);
        break;
    }
  }, 200);
});
</script>
`;

http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  let pathname = decodeURIComponent(parsed.pathname === '/' ? '/index.html' : parsed.pathname);
  let fp = path.join(dir, pathname);

  if (parsed.pathname === '/' || parsed.pathname === '/index.html') {
    let files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).sort();
    let html = '<html><body style="font-family:sans-serif;padding:20px;"><h2>Figma Capture — Updated Design States</h2><ul>';
    files.forEach(f => { html += `<li style="margin:8px 0"><a href="/${encodeURIComponent(f)}">${f}</a></li>`; });
    html += '</ul></body></html>';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
    return;
  }
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end('Not found: ' + fp); return; }
  let content = fs.readFileSync(fp, 'utf8');
  const FIGMA_SCRIPT = '<script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>';
  content = content.replace('</head>', STRIP_CSS + INTERACTIVE_SCRIPT + FIGMA_SCRIPT + '</head>');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(content);
}).listen(port, () => console.log('Serving figma capture on http://localhost:' + port));
