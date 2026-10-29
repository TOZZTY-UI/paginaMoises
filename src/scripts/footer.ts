document.querySelectorAll<HTMLElement>("[data-footer]").forEach((footer) => {
  const bubble = footer.querySelector<HTMLElement>(".dcf-bubble");
  const wordmark = footer.querySelector<HTMLElement>(".dcf-wordmark");
  if (wordmark && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      wordmark.classList.toggle("is-visible", entry.isIntersecting);
    }, { threshold: 0.2 });
    observer.observe(wordmark);
  }
  let timer: ReturnType<typeof setTimeout>;
  footer
    .querySelectorAll<HTMLButtonElement>(".dcf-character")
    .forEach((character) => {
      character.addEventListener("click", () => {
        if (!bubble) return;
        bubble.textContent = character.dataset.says || "";
        bubble.style.left = character.style.getPropertyValue("--x");
        bubble.style.top = character.style.getPropertyValue("--y");
        bubble.hidden = false;
        character.classList.remove("is-hop");
        void character.offsetWidth;
        character.classList.add("is-hop");
        clearTimeout(timer);
        timer = setTimeout(() => {
          bubble.hidden = true;
          character.classList.remove("is-hop");
        }, 2600);
      });
    });
  footer.querySelector("[data-to-top]")?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  });
});
