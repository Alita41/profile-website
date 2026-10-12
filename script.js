(() => {
  document.documentElement.classList.add('js-ready');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('site-menu');
  if (toggle && menu) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      menu.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      menu.classList.toggle('is-open', open);
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const copyButton = document.querySelector('.copy-email');
  if (copyButton) {
    const original = copyButton.innerHTML;
    copyButton.addEventListener('click', async () => {
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(copyButton.dataset.copy);
        copyButton.textContent = 'Email copied ✓';
        window.setTimeout(() => { copyButton.innerHTML = original; }, 2200);
      } catch {
        window.location.href = `mailto:${copyButton.dataset.copy}`;
      }
    });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }
})();