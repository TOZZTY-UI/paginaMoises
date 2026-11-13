const faqItems = document.querySelectorAll<HTMLDetailsElement>('.faq-item');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const duration = 360;

faqItems.forEach((item) => {
    const summary = item.querySelector('summary');
    const answer = item.querySelector<HTMLElement>('.faq-answer');

    if (!summary || !answer) return;

    let finishTimer: number | undefined;

    const finish = (open: boolean) => {
        if (finishTimer) window.clearTimeout(finishTimer);
        item.open = open;
        item.classList.remove('is-opening', 'is-closing');
        answer.style.height = '';
        item.dataset.animating = 'false';
    };

    const animate = (open: boolean) => {
        item.dataset.animating = 'true';
        item.classList.add(open ? 'is-opening' : 'is-closing');

        if (open) {
            item.open = true;
            answer.style.height = '0px';
        } else {
            answer.style.height = `${answer.offsetHeight}px`;
        }

        // Force the browser to register the starting height before animating.
        void answer.offsetHeight;

        requestAnimationFrame(() => {
            answer.style.height = open ? `${answer.scrollHeight}px` : '0px';
        });

        answer.addEventListener('transitionend', (event) => {
            if (event.propertyName !== 'height') return;
            finish(open);
        }, { once: true });

        // Safety net for browsers that do not emit transitionend reliably.
        finishTimer = window.setTimeout(() => finish(open), duration + 80);
    };

    summary.addEventListener('click', (event) => {
        // The native details behavior remains the fallback when motion is reduced.
        if (reducedMotion.matches) return;

        event.preventDefault();
        if (item.dataset.animating === 'true') return;

        animate(!item.open);
    });
});
