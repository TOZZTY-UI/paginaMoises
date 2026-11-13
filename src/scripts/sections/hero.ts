import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const media = gsap.matchMedia();

media.add('(max-width: 760px) and (prefers-reduced-motion: no-preference)', () => {
  const cue = document.querySelector<HTMLElement>('.hero__scroll-cue');
  const heroContent = document.querySelector<HTMLElement>('.hero__content');

  if (!cue || !heroContent) return;

  const hideCue = () => gsap.to(cue, { autoAlpha: 0, y: 10, duration: 0.22, ease: 'power2.out', overwrite: true });
  const showCue = () => gsap.to(cue, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out', overwrite: true });

  const trigger = ScrollTrigger.create({
    trigger: heroContent,
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self) => {
      if (self.direction === 1 && self.progress > 0.03) hideCue();
      if (self.direction === -1 && self.progress < 0.45) showCue();
    },
  });

  return () => trigger.kill();
});
