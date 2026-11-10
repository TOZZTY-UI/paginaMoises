import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    function initTestimonials(section: HTMLElement) {
      if (section.dataset.scrollInitialized) return;
      const container = section.querySelector<HTMLElement>('[data-scroll-container]');
      const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-card]'));
      if (!container || !cards.length) return;
      section.dataset.scrollInitialized = 'true';

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        section.classList.remove('is-animated');
        cards.forEach((card) => gsap.set(card, { clearProps: 'transform,opacity,filter,pointerEvents' }));
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        section.classList.add('is-animated');
        const steps = Math.max(1, cards.length - 1);

        cards.forEach((card, index) => {
          const rotation = (index % 2 === 0 ? -1 : 1) * Math.min(3, index * 1.5);
          const depth = (cards.length - index) * 8;
          card.style.zIndex = String(index === 0 ? cards.length + 1 : cards.length - index);
          gsap.set(card, { y: index * 12, z: depth, rotation, autoAlpha: 1 });
        });

        const timeline = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        });

        cards.slice(0, -1).forEach((card, index) => {
          timeline.to(card, {
            y: () => -Math.max(window.innerHeight * 1.1, 650),
            rotation: 0,
            autoAlpha: 0,
            // Cada transición ocupa exactamente su tramo del scroll.
            // Antes duraba 1 unidad completa aunque empezara escalonada;
            // eso dejaba un tramo negro después de la última tarjeta.
            duration: 1 / steps,
            onStart: () => { card.style.pointerEvents = 'none'; },
            onReverseComplete: () => { card.style.pointerEvents = 'auto'; },
          }, index / steps);
        });

        return () => timeline.kill();
      });

      const cleanup = () => {
        mm.revert();
        delete section.dataset.scrollInitialized;
      };
      document.addEventListener('astro:before-swap', cleanup, { once: true });
    }

    const bootTestimonials = () => {
      document.querySelectorAll<HTMLElement>('[data-testimonials]').forEach(initTestimonials);
      ScrollTrigger.refresh();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bootTestimonials, { once: true });
    } else {
      bootTestimonials();
    }

    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
    document.addEventListener('astro:page-load', bootTestimonials);
