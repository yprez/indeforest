(() => {
  'use strict';

  const views = document.querySelectorAll('.view');
  const navLinks = document.querySelectorAll('[data-nav]');

  function showView(id) {
    views.forEach(function (view) {
      view.hidden = view.id !== id;
    });
    navLinks.forEach(function (link) {
      if (link.closest('nav')) {
        if (link.getAttribute('data-nav') === id) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    });
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-nav]');
    if (!link) return;

    e.preventDefault();
    var id = link.getAttribute('data-nav');
    showView(id);
    history.pushState(null, '', '#' + id);
  });

  window.addEventListener('popstate', function () {
    var id = location.hash.slice(1) || 'events';
    showView(id);
  });

  // Handle initial hash on load
  var initial = location.hash.slice(1);
  if (initial && document.getElementById(initial)) {
    showView(initial);
  }
})();
