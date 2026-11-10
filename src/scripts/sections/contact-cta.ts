const mobileQuery = window.matchMedia('(max-width: 640px)');
const ctas = document.querySelectorAll<HTMLElement>('.landing-cta');

if (ctas.length > 0) {
  let lastScrollY = window.scrollY;
  let scrollDirection = 0;

  const setActive = (cta: HTMLElement, active: boolean) => {
    cta.classList.toggle('is-scroll-active', active && mobileQuery.matches);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    scrollDirection = currentScrollY > lastScrollY ? 1 :
      currentScrollY < lastScrollY ? -1 : scrollDirection;
    lastScrollY = currentScrollY;

    ctas.forEach((cta) => {
      if (!mobileQuery.matches || scrollDirection < 0) {
        setActive(cta, false);
        return;
      }

      const bounds = cta.getBoundingClientRect();
      const reachedActivationPoint = bounds.top <= window.innerHeight * 0.72 &&
        bounds.bottom >= window.innerHeight * 0.25;

      if (reachedActivationPoint) {
        setActive(cta, true);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setActive(entry.target as HTMLElement, false);
        }
      });
    }, { threshold: 0.01 });

    ctas.forEach((cta) => observer.observe(cta));
  }

  mobileQuery.addEventListener('change', () => {
    ctas.forEach((cta) => setActive(cta, false));
  });
}
