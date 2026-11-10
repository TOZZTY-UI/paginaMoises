document.querySelectorAll<HTMLElement>(
  '[data-music-library]'
).forEach((root) => {

  const albumGrid = root.querySelector<HTMLElement>(
    '[data-album-grid]'
  );

  const albumButtons = root.querySelectorAll<
    HTMLButtonElement
  >('[data-album]');

  const albumViews = root.querySelectorAll<
    HTMLElement
  >('[data-album-view]');

  let activeIndex: string | null = null;
  let discObserver: IntersectionObserver | null = null;

  function revealDiscs(view: HTMLElement) {
    const cards = view.querySelectorAll<HTMLElement>('.music-card');

    discObserver?.disconnect();

    if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cards.forEach((card) => card.classList.add('is-visible'));
      return;
    }

    discObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const card = entry.target as HTMLElement;
        card.classList.add('is-visible');
        discObserver?.unobserve(card);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

    cards.forEach((card) => discObserver?.observe(card));
  }

  function openAlbum(index: string, sourceButton?: HTMLButtonElement) {
    activeIndex = index;

    if (sourceButton) {
      sourceButton.classList.add('is-opening');
      sourceButton.setAttribute('aria-busy', 'true');
    }

    window.setTimeout(() => {
      if (sourceButton) {
        sourceButton.classList.remove('is-opening');
        sourceButton.removeAttribute('aria-busy');
      }

      albumViews.forEach((view) => {
        const isActive =
          view.dataset.albumView === index;

        view.hidden = !isActive;

        if (isActive) {
          view.classList.remove('is-entering', 'is-open');
          void view.offsetWidth;
          view.classList.add('is-entering');
          view.querySelectorAll<HTMLElement>('.music-card').forEach((card) => {
            card.classList.remove('is-visible');
          });

          requestAnimationFrame(() => {
            view.classList.add('is-open');
            view.classList.add('is-scroll-ready');
            revealDiscs(view);
          });

          view.querySelector<HTMLElement>(
            '[data-album-title]'
          )?.focus();
        }
      });

      albumButtons.forEach((button) => {
        button.classList.remove('is-active');
        button.setAttribute(
          'aria-expanded',
          String(button.dataset.album === index)
        );
      });

      sourceButton?.classList.add('is-active');
    }, sourceButton && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 560 : 0);
  }

  function closeAlbum() {
    const previousButton = Array.from(
      albumButtons
    ).find(
      button => button.dataset.album === activeIndex
    );

    const activeView = Array.from(albumViews).find(
      view => !view.hidden
    );
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const closeDuration = reducedMotion ? 0 : 560;

    discObserver?.disconnect();
    discObserver = null;

    activeView?.classList.add('is-closing');
    previousButton?.classList.add('is-closing');

    window.setTimeout(() => {
      albumViews.forEach((view) => {
        view.hidden = true;
        view.classList.remove('is-entering', 'is-open', 'is-scroll-ready', 'is-closing');
        view.querySelectorAll<HTMLElement>('.music-card').forEach((card) => {
          card.classList.remove('is-visible');
        });
      });

      if (previousButton) {
        previousButton.classList.remove('is-active');
        requestAnimationFrame(() => {
          previousButton.classList.remove('is-closing');
        });
      }

      albumButtons.forEach((button) => {
        button.setAttribute(
          'aria-expanded',
          'false'
        );
      });

      previousButton?.focus();
      activeIndex = null;
    }, closeDuration);
  }

  albumButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('is-opening') || button.classList.contains('is-closing')) return;

      if (button.classList.contains('is-active')) {
        closeAlbum();
        return;
      }

      openAlbum(button.dataset.album ?? '0', button);
    });
  });

});
