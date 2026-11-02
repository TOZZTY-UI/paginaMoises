import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initScrollReveal = () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sections = gsap.utils.toArray<HTMLElement>(
    'main > section:not(.hero):not([data-scroll-reveal-manual])',
  );

  if (!sections.length || reducedMotion.matches) return;

  const context = gsap.context(() => {
    gsap.set(sections, { autoAlpha: 0, y: 28 });

    ScrollTrigger.batch(sections, {
      start: 'top 88%',
      once: true,
      interval: 0.08,
      batchMax: 2,
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.72,
        ease: 'power3.out',
        overwrite: 'auto',
        stagger: 0.08,
      }),
    });

    // Images and web fonts can change section heights after the first pass.
    Promise.all([
      document.fonts?.ready,
      ...Array.from(document.images).map((image) => {
        if (image.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          image.addEventListener('load', () => resolve(), { once: true });
          image.addEventListener('error', () => resolve(), { once: true });
        });
      }),
    ]).then(() => ScrollTrigger.refresh());
  });

  document.addEventListener('astro:before-swap', () => context.revert(), { once: true });
};

initScrollReveal();
document.addEventListener('astro:page-load', initScrollReveal);
