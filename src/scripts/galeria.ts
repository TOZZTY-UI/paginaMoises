// El código se ejecuta en el navegador; Astro genera el HTML estático.
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
document.querySelectorAll<HTMLElement>('[data-perspective-tunnel]').forEach((root) => {
  const cardNodes = Array.from(root.querySelectorAll<HTMLElement>('[data-card]'));
  cardNodes.forEach((card) => {
    const image = card.querySelector<HTMLImageElement>('img');
    const container = card.querySelector<HTMLElement>('.card-inner');
    if (!image || !container || image.complete) return;
    container.classList.add('image-loading');
    const finish = () => container.classList.remove('image-loading');
    image.addEventListener('load', finish, { once: true });
    image.addEventListener('error', finish, { once: true });
  });
  // Mezclar las posiciones en cada visita, sin modificar el diccionario original.
  for (let i = cardNodes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardNodes[i], cardNodes[j]] = [cardNodes[j], cardNodes[i]];
  }
  cardNodes.forEach((card, index) => {
    const angle = index * 137.5 * Math.PI / 180;
    card.dataset.index = String(index);
    card.dataset.cos = String(Math.cos(angle));
    card.dataset.sin = String(Math.sin(angle));
    card.dataset.radiusX = String(0.28 + (index % 3) * 0.08);
    card.dataset.radiusY = String(0.26 + (index % 2) * 0.09);
    card.dataset.rotation = String((index % 2 === 0 ? 1 : -1) * (3 + (index % 5) * 2));
    card.style.zIndex = String(index + 1);
  });
  const intro = root.querySelector<HTMLElement>('[data-intro]');
  const prompt = root.querySelector<HTMLElement>('[data-prompt]');
  const galleryEnd = root.querySelector<HTMLElement>('[data-gallery-end]');
  const navbar = document.querySelector<HTMLElement>('.navbar-container');
  if (navbar) {
    navbar.classList.add('gallery-nav-hidden');
    navbar.inert = true;
  }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let width = root.clientWidth;
  let height = root.clientHeight;
  let mobile = width < 768;
  let targetProgress = 0;
  let progress = 0;
  let targetX = 0;
  let targetY = 0;
  let pointerX = 0;
  let pointerY = 0;
  let raf = 0;
  let lastFrame = 0;
  let lastTouchY: number | null = null;
  // Mantener un ritmo parecido aunque se agreguen más fotografías.
  const scrollScale = clamp(12 / Math.max(cardNodes.length, 1), .25, 1);

  const scheduleFrame = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  const recalc = () => {
    width = root.clientWidth;
    height = root.clientHeight;
    mobile = width < 768;
    root.style.perspective = mobile ? '900px' : '1200px';
    const cardWidth = mobile ? clamp(width * .38, 130, 180) : clamp(width * .18, 180, 270);
    cardNodes.forEach((card) => { card.style.width = `${cardWidth}px`; });
    scheduleFrame();
  };
  const move = (e: PointerEvent) => {
    if (reducedMotion.matches) return;
    targetX = (e.clientX / window.innerWidth - .5) * 2;
    targetY = (e.clientY / window.innerHeight - .5) * 2;
    scheduleFrame();
  };
  const wheel = (e: WheelEvent) => {
    if ((targetProgress >= 1 && e.deltaY > 0) || (targetProgress <= 0 && e.deltaY < 0)) return;
    e.preventDefault();
    targetProgress = clamp(targetProgress + e.deltaY * .0008 * scrollScale, 0, 1);
    scheduleFrame();
  };
  const touchStart = (e: TouchEvent) => { lastTouchY = e.touches[0]?.clientY ?? null; };
  const touchMove = (e: TouchEvent) => {
    if (lastTouchY === null) return;
    const y = e.touches[0]?.clientY;
    if (y === undefined) return;
    if ((targetProgress >= 1 && y < lastTouchY) || (targetProgress <= 0 && y > lastTouchY)) { lastTouchY = y; return; }
    e.preventDefault();
    targetProgress = clamp(targetProgress + (lastTouchY - y) * .002 * scrollScale, 0, 1);
    scheduleFrame();
    lastTouchY = y;
  };
  const keydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault(); targetProgress = clamp(targetProgress + .08 * scrollScale, 0, 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault(); targetProgress = clamp(targetProgress - .08 * scrollScale, 0, 1);
    }
    scheduleFrame();
  };
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const map = (v: number, a: number, b: number, c: number, d: number) => lerp(c, d, clamp((v - a) / (b - a), 0, 1));
  const fade = (p: number) => p < .18 ? map(p, 0, .18, 0, 1) : p > .82 ? map(p, .82, .98, 1, 0) : 1;
  function frame(time: number) {
    raf = 0;
    const elapsed = lastFrame ? Math.min(time - lastFrame, 64) : 16.67;
    lastFrame = time;
    const smoothing = reducedMotion.matches ? 1 : 1 - Math.pow(1 - .085, elapsed / 16.67);
    const pointerSmoothing = reducedMotion.matches ? 1 : 1 - Math.pow(1 - .075, elapsed / 16.67);
    progress = lerp(progress, targetProgress, smoothing);
    pointerX = lerp(pointerX, targetX, pointerSmoothing);
    pointerY = lerp(pointerY, targetY, pointerSmoothing);
    if (Math.abs(progress - targetProgress) < .0001) progress = targetProgress;
    if (Math.abs(pointerX - targetX) < .001) pointerX = targetX;
    if (Math.abs(pointerY - targetY) < .001) pointerY = targetY;
    const titleScale = progress < .5 ? map(progress, 0, .5, .7, 1) : map(progress, .5, 1, 1, 1.35);
    const introAlpha = progress < .12 ? map(progress, 0, .12, .25, 1) : progress > .85 ? map(progress, .85, 1, 1, 0) : 1;
    if (intro) { intro.style.transform = `scale(${titleScale})`; intro.style.opacity = `${introAlpha}`; }
    if (prompt) prompt.style.opacity = `${map(progress, 0, .12, 1, 0)}`;
    if (navbar) {
      const visible = progress >= .96;
      if (!visible && !navbar.inert && navbar.contains(document.activeElement)) root.focus();
      navbar.classList.toggle('gallery-nav-hidden', !visible);
      navbar.inert = !visible;
    }
    if (galleryEnd) {
      const visible = progress >= .96;
      galleryEnd.classList.toggle('is-visible', visible);
      galleryEnd.inert = !visible;
      galleryEnd.setAttribute('aria-hidden', String(!visible));
    }
    // Cada foto recorre el túnel en una ventana corta: solo unas pocas coinciden.
    const visibleWindow = mobile ? 2.5 : 3;
    const timeline = clamp(progress / .94, 0, 1) * (Math.max(cardNodes.length - 1, 0) + visibleWindow);
    for (const card of cardNodes) {
      const i = Number(card.dataset.index);
      const local = clamp((timeline - i) / visibleWindow, 0, 1);
      const z = lerp(mobile ? -1200 : -1700, mobile ? 350 : 500, local);
      const baseX = Number(card.dataset.cos) * width * Number(card.dataset.radiusX);
      const baseY = Number(card.dataset.sin) * height * Number(card.dataset.radiusY);
      const pan = mobile ? 20 : 45;
      const x = baseX - pointerX * pan;
      const y = baseY - pointerY * pan;
      card.style.opacity = `${fade(local)}`;
      card.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateZ(${card.dataset.rotation}deg)`;
    }
    if (progress !== targetProgress || pointerX !== targetX || pointerY !== targetY) scheduleFrame();
    else lastFrame = 0;
  }
  const observer = new ResizeObserver(recalc);
  observer.observe(root);
  recalc();
  root.addEventListener('wheel', wheel, { passive: false });
  root.addEventListener('touchstart', touchStart, { passive: true });
  root.addEventListener('touchmove', touchMove, { passive: false });
  root.addEventListener('touchend', () => { lastTouchY = null; });
  root.addEventListener('pointermove', move, { passive: true });
  root.addEventListener('keydown', keydown);
  scheduleFrame();
  // Limpieza si Astro reemplaza la página mediante navegación del cliente.
  document.addEventListener('astro:before-swap', () => {
    cancelAnimationFrame(raf);
    observer.disconnect();
    if (navbar) {
      navbar.classList.remove('gallery-nav-hidden');
      navbar.inert = false;
    }
  }, { once: true });
});
