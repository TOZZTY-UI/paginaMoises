import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const initWhoSection = (section: HTMLElement) => {
    if (section.dataset.initialized) return;
    section.dataset.initialized = 'true';

    const portrait = section.querySelector<HTMLElement>('[data-who-visual]');
    const copy = section.querySelector<HTMLElement>('[data-who-copy]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!portrait || !copy || reducedMotion.matches) return;

    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      })
        .fromTo(portrait, { x: 90, opacity: 0 }, { x: 0, opacity: 1, duration: .8 })
        .fromTo(copy, { x: 70, opacity: 0 }, { x: 0, opacity: 1, duration: .7 }, '-=.35');
    }, section);

    document.addEventListener('astro:before-swap', () => context.revert(), { once: true });
  };

  document.querySelectorAll<HTMLElement>('[data-who-section]').forEach(initWhoSection);
  document.addEventListener('astro:page-load', () => {
    document.querySelectorAll<HTMLElement>('[data-who-section]').forEach(initWhoSection);
  });
