(function () {
  var root = document.documentElement;

  // Theme toggle (persisted; falls back to the OS preference)
  var btn = document.querySelector('.theme-toggle');
  function current() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Highlight the nav link of the section in view
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  if ('IntersectionObserver' in window && links.length) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (l) { l.classList.remove('is-active'); });
          map[en.target.id].classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  // Subtle reveal on scroll
  var items = document.querySelectorAll('.section, .card, .timeline__item');
  if ('IntersectionObserver' in window) {
    root.classList.add('js-reveal');
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    items.forEach(function (el) { ro.observe(el); });
  }
})();
