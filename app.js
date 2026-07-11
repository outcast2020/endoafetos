/* =============================================================
   EndoAfetos — Interações
   ============================================================= */
(function () {
  'use strict';

  /* ---------- Ano automático no rodapé ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---------- Cabeçalho: sombra ao rolar ---------- */
  var header = document.querySelector('.site-header');
  var toTop = document.getElementById('toTop');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) { header.classList.toggle('is-scrolled', y > 8); }
    if (toTop) { toTop.classList.toggle('is-visible', y > 500); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');

  function closeMenu() {
    if (!menu || !toggle) { return; }
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    // Fecha o menu ao clicar em um link (navegação ágil)
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) { closeMenu(); }
    });
  }

  /* ---------- Reveal ao rolar (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Vídeos: carrega o iframe se data-embed estiver preenchido ---------- */
  document.querySelectorAll('.video__frame').forEach(function (frame) {
    var url = (frame.getAttribute('data-embed') || '').trim();
    var iframe = frame.querySelector('iframe');
    if (url && iframe) {
      iframe.setAttribute('src', url);
      frame.classList.add('has-video');
    }
  });

  /* ---------- Modais de currículo ---------- */
  var lastFocused = null;

  function openModal(id) {
    var modal = document.getElementById(id);
    if (!modal) { return; }
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    var closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) { closeBtn.focus(); }
  }

  function closeModal(modal) {
    if (!modal) { return; }
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') { lastFocused.focus(); }
  }

  // Abrir
  document.querySelectorAll('[data-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () { openModal(btn.getAttribute('data-modal')); });
  });

  // Fechar (botão × ou backdrop)
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-close')) { closeModal(modal); }
    });
  });

  // Fechar com ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var open = document.querySelector('.modal:not([hidden])');
      if (open) { closeModal(open); }
    }
  });

})();
