const triggers = document.querySelectorAll<HTMLElement>('[data-modal-trigger]');

triggers.forEach((trigger) => {
  const targetId = trigger.dataset.modalTrigger;
  const dialog = targetId ? document.getElementById(targetId) : null;

  if (!(dialog instanceof HTMLDialogElement)) return;

  const closeButton = dialog.querySelector<HTMLElement>('[data-modal-close]');
  let previousFocus: HTMLElement | null = null;
  let closeTimer: number | undefined;

  const closeModal = () => {
    if (!dialog.open || dialog.classList.contains('is-closing')) return;

    dialog.classList.add('is-closing');
    closeTimer = window.setTimeout(() => {
      dialog.classList.remove('is-closing');
      dialog.close();
    }, 220);
  };

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog.showModal();
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    closeButton?.focus();
  });

  closeButton?.addEventListener('click', closeModal);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeModal();
  });

  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeModal();
  });

  dialog.addEventListener('close', () => {
    if (closeTimer) window.clearTimeout(closeTimer);
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    previousFocus?.focus();
  });
});
