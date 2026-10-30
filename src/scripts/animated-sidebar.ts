document.querySelectorAll<HTMLElement>('[data-sidebar]').forEach((shell) => {
  const sidebar = shell.querySelector<HTMLElement>('#animated-sidebar');
  const frame = shell.querySelector<HTMLElement>('[data-page-frame]');
  const toggle = shell.querySelector<HTMLButtonElement>('.sidebar-toggle');
  const dismiss = shell.querySelector<HTMLButtonElement>('.page-dismiss');
  const closeButton = shell.querySelector<HTMLButtonElement>('.sidebar-close');
  if (!sidebar || !frame || !toggle || !dismiss || !closeButton) return;
  let oldOverflow = '';
  const close = (restoreFocus = true) => {
    shell.classList.remove('is-open');
    sidebar.inert = true;
    sidebar.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    dismiss.inert = true;
    document.body.style.overflow = oldOverflow;
    if (restoreFocus) toggle.focus({ preventScroll: true });
  };
  const open = () => {
    oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    sidebar.inert = false;
    sidebar.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    dismiss.inert = false;
    shell.classList.add('is-open');
    if (window.matchMedia('(min-width: 769px)').matches) sidebar.querySelector<HTMLAnchorElement>('a')?.focus();
    else closeButton.focus();
  };
  toggle.addEventListener('click', () => shell.classList.contains('is-open') ? close() : open());
  dismiss.addEventListener('click', () => close());
  closeButton.addEventListener('click', () => close());
  let navigating = false;
  sidebar.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => link.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
    const destination = new URL(link.href, location.href);
    if (destination.origin !== location.origin) return;
    if (navigating) { event.preventDefault(); return; }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { close(false); return; }
    event.preventDefault();
    navigating = true;
    close(false);
    window.setTimeout(() => { window.location.assign(destination.href); }, 320);
  }));
  document.addEventListener('keydown', (event) => {
    if (!shell.classList.contains('is-open')) return;
    if (event.key === 'Escape') { event.preventDefault(); close(); }
    if (event.key === 'Tab') {
      const links = Array.from(sidebar.querySelectorAll<HTMLAnchorElement>('a'));
      const first = links[0];
      const last = links[links.length - 1];
      if (window.matchMedia('(min-width: 769px)').matches) {
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        return;
      }
      if (event.shiftKey && document.activeElement === closeButton) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === closeButton && !first) { event.preventDefault(); closeButton.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); closeButton.focus(); }
      else if (!event.shiftKey && document.activeElement === toggle) { event.preventDefault(); first?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); closeButton.focus(); }
    }
  });
});
