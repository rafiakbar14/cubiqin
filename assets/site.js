/* ============================================================
   Cubiqin.id — shared site behaviour
   Theme toggle (persisted across pages) + FAQ accordion.
   ============================================================ */
(function () {
  var STORAGE_KEY = 'cubiqin-theme';

  function getApp() { return document.getElementById('app'); }

  function applyTheme(theme) {
    var app = getApp();
    if (!app) return;
    app.setAttribute('data-theme', theme);
    var label = document.getElementById('theme-label');
    // Label shows the mode you'd switch TO.
    if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }

  // Read saved choice (default: light) and apply before paint as early as possible.
  function savedTheme() {
    try { return localStorage.getItem(STORAGE_KEY) || 'light'; }
    catch (e) { return 'light'; }
  }

  // Expose globally for inline onclick handlers.
  window.toggleTheme = function () {
    var app = getApp();
    var next = app.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  };

  // Lead magnet: open WhatsApp with a prefilled audit request.
  // Nomor WhatsApp bisnis (format internasional tanpa +). 083135183093 → 6283135183093.
  var WA_NUMBER = '6283135183093';
  window.kirimAudit = function () {
    var input = document.getElementById('audit-ig');
    var ig = (input && input.value ? input.value : '').trim().replace(/^@+/, '');
    var msg = 'Halo Cubiqin! Saya mau minta audit digital gratis.';
    if (ig) msg += ' Username Instagram bisnis saya: @' + ig;
    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
  };

  // FAQ accordion: one item open at a time.
  var openFaq = null;
  window.toggleFaq = function (i) {
    openFaq = (openFaq === i) ? null : i;
    document.querySelectorAll('[data-faq-answer]').forEach(function (el) {
      el.style.display = (Number(el.getAttribute('data-faq-answer')) === openFaq) ? 'block' : 'none';
    });
    document.querySelectorAll('[data-faq-icon]').forEach(function (el) {
      el.textContent = (Number(el.getAttribute('data-faq-icon')) === openFaq) ? '−' : '+';
    });
  };

  // Wire any element with [data-wa] to open WhatsApp with that prefilled message.
  // Centralises the number so pages only declare the message text.
  function wireWhatsApp() {
    document.querySelectorAll('[data-wa]').forEach(function (el) {
      var msg = el.getAttribute('data-wa') || 'Halo Cubiqin!';
      var href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
      if (el.tagName === 'A') {
        el.setAttribute('href', href);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener');
      } else {
        el.style.cursor = 'pointer';
        el.addEventListener('click', function () { window.open(href, '_blank'); });
      }
    });
  }

  // Wire share buttons ([data-share]="whatsapp|facebook|x|copy") using the live URL.
  function wireShare() {
    var url = encodeURIComponent(location.href);
    var title = encodeURIComponent(document.title);
    document.querySelectorAll('[data-share]').forEach(function (el) {
      var type = el.getAttribute('data-share');
      if (type === 'copy') {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          var revert = function () {
            var orig = el.innerHTML;
            el.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>';
            setTimeout(function () { el.innerHTML = orig; }, 1500);
          };
          if (navigator.clipboard) { navigator.clipboard.writeText(location.href).then(revert, revert); }
          else { revert(); }
        });
        return;
      }
      var href = '#';
      if (type === 'whatsapp') href = 'https://wa.me/?text=' + title + '%20' + url;
      else if (type === 'facebook') href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
      else if (type === 'x') href = 'https://twitter.com/intent/tweet?text=' + title + '&url=' + url;
      el.setAttribute('href', href);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }

  // Mobile hamburger menu.
  window.toggleMenu = function () {
    var m = document.getElementById('nav-mobile');
    if (!m) return;
    var open = m.classList.toggle('open');
    var b = document.querySelector('.nav-burger');
    if (b) b.setAttribute('aria-expanded', String(open));
  };
  function wireMobileMenu() {
    var m = document.getElementById('nav-mobile');
    if (!m) return;
    m.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { m.classList.remove('open'); });
    });
  }

  function init() { applyTheme(savedTheme()); wireWhatsApp(); wireShare(); wireMobileMenu(); }

  // Run as soon as the DOM is ready.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
