// El contenido es visible por defecto; la animación solo se activa con JS.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

if ('IntersectionObserver' in window && !motionPreference.matches) {
  const blocks = document.querySelectorAll<HTMLElement>(
    'main .section .container > *, main .music-selector > *, footer .dcf-top, footer .dcf-world, footer .dcf-bar'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const block = entry.target as HTMLElement;
      block.classList.add('block-reveal');
      observer.unobserve(block);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

  blocks.forEach((block) => observer.observe(block));
  document.addEventListener('astro:before-swap', () => observer.disconnect(), { once: true });
}
