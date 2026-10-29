const menuButton = document.querySelector<HTMLButtonElement>(
  ".menu-button"
);
const mobileMenu = document.querySelector<HTMLElement>(
  "#mobile-menu"
);
const navbar = document.querySelector<HTMLElement>(".navbar-container");
const desktopLinks = navbar?.querySelector<HTMLElement>(".desktop-links");
const mobileViewport = window.matchMedia("(max-width: 768px)");
let previousOverflow: string | undefined;

const closeMenu = () => {
  if (mobileMenu) {
    mobileMenu.classList.remove("is-open");
    mobileMenu.inert = true;
    mobileMenu.setAttribute("aria-hidden", "true");
  }
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Abrir menú");
  if (previousOverflow !== undefined) {
    document.body.style.overflow = previousOverflow;
    previousOverflow = undefined;
  }
};

const updateNavbar = () => {
  if (!navbar) return;
  const compact = window.scrollY > 160;
  const moveFocus = compact && !navbar.classList.contains("is-compact") && desktopLinks?.contains(document.activeElement);
  const restoreFocus = !compact && navbar.classList.contains("is-compact") && navbar.contains(document.activeElement) && !desktopLinks?.contains(document.activeElement);
  if (!compact && navbar.classList.contains("is-compact") && !mobileViewport.matches) {
    closeMenu();
  }
  navbar.classList.toggle("is-compact", compact);
  if (moveFocus) menuButton?.focus();
  if (restoreFocus && window.matchMedia("(min-width: 769px)").matches) desktopLinks?.querySelector<HTMLAnchorElement>("a")?.focus();
};
window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

menuButton?.addEventListener("click", () => {
  if (!mobileMenu) return;

  const open = !mobileMenu.classList.contains("is-open");
  mobileMenu.classList.toggle("is-open", open);
  mobileMenu.inert = !open;
  mobileMenu.setAttribute("aria-hidden", String(!open));
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  if (open && mobileViewport.matches) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  } else if (!open) {
    closeMenu();
  }
});

mobileViewport.addEventListener("change", closeMenu);

document.addEventListener("click", (event) => {
  if (event.target instanceof Node && !navbar?.contains(event.target)) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
  if (event.key === "Tab" && mobileViewport.matches && menuButton?.getAttribute("aria-expanded") === "true") {
    const links = mobileMenu?.querySelectorAll<HTMLAnchorElement>("a");
    const last = links?.[links.length - 1];
    if (event.shiftKey && document.activeElement === menuButton && last) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      menuButton.focus();
    }
  }
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
