document.querySelectorAll<HTMLElement>("[data-footer]").forEach((footer) => {
  const bubble = footer.querySelector<HTMLElement>(".dcf-bubble");
  const wordmark = footer.querySelector<HTMLElement>(".dcf-wordmark");
  const quoteRotator = footer.querySelector<HTMLElement>("[data-quote-rotator]");

  if (quoteRotator) {
    const quoteText = quoteRotator.querySelector<HTMLElement>("blockquote");
    const quoteAuthor = quoteRotator.querySelector<HTMLElement>("cite");

    try {
      const quotes = JSON.parse(quoteRotator.dataset.quotes || "[]") as Array<{
        text: string;
        author?: string;
      }>;
      let quoteIndex = 0;

      if (quotes.length > 1 && quoteText) {
        window.setInterval(() => {
          quoteRotator.classList.add("is-changing");

          window.setTimeout(() => {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            const quote = quotes[quoteIndex];
            quoteText.textContent = quote.text;

            if (quote.author) {
              if (quoteAuthor) {
                quoteAuthor.textContent = `— ${quote.author}`;
              } else {
                const author = document.createElement("cite");
                author.textContent = `— ${quote.author}`;
                quoteRotator.append(author);
              }
            } else if (quoteAuthor) {
              quoteAuthor.remove();
            }

            quoteRotator.classList.remove("is-changing");
          }, 350);
        }, 6500);
      }
    } catch {
      // Mantener la primera cita visible si el contenido no se puede leer.
    }
  }

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
