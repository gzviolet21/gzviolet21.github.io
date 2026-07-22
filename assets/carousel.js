(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setup(root) {
    var track = root.querySelector('.track');
    var imgs = Array.prototype.slice.call(track.querySelectorAll('img'));
    if (imgs.length < 2) return;
    var cap = root.querySelector('.ccap');
    var dotsWrap = root.querySelector('.dots');
    var i = 0;

    // build dots
    var dots = imgs.map(function (img, n) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Slide ' + (n + 1));
      b.addEventListener('click', function () { go(n); });
      dotsWrap.appendChild(b);
      return b;
    });

    function go(n) {
      i = (n + imgs.length) % imgs.length;
      track.style.transform = 'translateX(' + (-i * 100) + '%)';
      dots.forEach(function (d, k) { d.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
      if (cap) cap.textContent = imgs[i].getAttribute('data-cap') || '';
    }

    root.querySelector('.cnav.prev').addEventListener('click', function () { go(i - 1); });
    root.querySelector('.cnav.next').addEventListener('click', function () { go(i + 1); });

    // keyboard when the carousel has focus
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { go(i - 1); }
      else if (e.key === 'ArrowRight') { go(i + 1); }
    });

    // touch / pointer swipe
    var x0 = null;
    root.addEventListener('pointerdown', function (e) { x0 = e.clientX; });
    root.addEventListener('pointerup', function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { go(dx < 0 ? i + 1 : i - 1); }
    });
    root.addEventListener('pointercancel', function () { x0 = null; });

    if (reduce) track.style.transition = 'none';
    go(0);
  }

  document.querySelectorAll('[data-carousel]').forEach(setup);
})();
