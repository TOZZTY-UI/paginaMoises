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

  function openAlbum(index: string) {
    activeIndex = index;

    if (albumGrid) {
      albumGrid.hidden = true;
    }

    albumViews.forEach((view) => {
      const isActive =
        view.dataset.albumView === index;

      view.hidden = !isActive;

      if (isActive) {
        view.querySelector<HTMLElement>(
          '[data-album-title]'
        )?.focus();
      }
    });

    albumButtons.forEach((button) => {
      button.setAttribute(
        'aria-expanded',
        String(button.dataset.album === index)
      );
    });
  }

  function closeAlbum() {
    if (albumGrid) {
      albumGrid.hidden = false;
    }

    albumViews.forEach((view) => {
      view.hidden = true;
    });

    const previousButton = Array.from(
      albumButtons
    ).find(
      button => button.dataset.album === activeIndex
    );

    albumButtons.forEach((button) => {
      button.setAttribute(
        'aria-expanded',
        'false'
      );
    });

    previousButton?.focus();
    activeIndex = null;
  }

  albumButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openAlbum(button.dataset.album ?? '0');
    });
  });

  root.querySelectorAll<HTMLButtonElement>(
    '[data-back]'
  ).forEach((button) => {
    button.addEventListener('click', closeAlbum);
  });

});
