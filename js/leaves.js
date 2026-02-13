(() => {
  'use strict';

  var leaves = ['\u{1F343}', '\u{1F342}', '\u{1F341}', '\u{2618}'];
  var flowers = ['\u{1F33A}', '\u{1F33B}', '\u{1F337}', '\u{1F338}'];
  var flowerChance = 0.15;
  var maxParticles = 20;
  var spawnInterval = 2000;

  var container = document.createElement('div');
  container.className = 'leaves-container';
  container.setAttribute('aria-hidden', 'true');
  document.body.appendChild(container);

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function spawn() {
    if (container.children.length >= maxParticles) return;

    var isFlower = Math.random() < flowerChance;
    var pool = isFlower ? flowers : leaves;
    var symbol = pool[Math.floor(Math.random() * pool.length)];

    var el = document.createElement('span');
    el.className = 'leaf';
    el.textContent = symbol;

    var startX = randomBetween(5, 95);
    var drift = randomBetween(-30, 30);
    var duration = randomBetween(8, 15);
    var size = randomBetween(0.8, 1.6);
    var delay = randomBetween(0, 1);
    var spinDir = Math.random() > 0.5 ? 1 : -1;

    el.style.left = startX + '%';
    el.style.fontSize = size + 'rem';
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = delay + 's';
    el.style.setProperty('--drift', drift + 'vw');
    el.style.setProperty('--spin-dir', spinDir);

    container.appendChild(el);

    el.addEventListener('animationend', function () {
      el.remove();
    });
  }

  // Respect reduced motion
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!prefersReduced.matches) {
    // Stagger initial batch
    for (var i = 0; i < 6; i++) {
      setTimeout(spawn, i * 400);
    }
    setInterval(spawn, spawnInterval);
  }
})();
