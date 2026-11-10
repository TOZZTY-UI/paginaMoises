const faqItems = document.querySelectorAll<HTMLDetailsElement>('.faq-item');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const duration = 360;

    faqItems.forEach((item) => {
        const summary = item.querySelector('summary');
        const answer = item.querySelector<HTMLElement>('.faq-answer');

        if (!summary || !answer) return;

        summary.addEventListener('click', (event) => {
            if (reducedMotion.matches) return;
            if (item.dataset.animating === 'true') {
                event.preventDefault();
                return;
            }

            event.preventDefault();
            item.dataset.animating = 'true';

            if (item.open) {
                answer.style.height = `${answer.offsetHeight}px`;
                item.classList.remove('is-open');
                item.classList.add('is-closing');

                requestAnimationFrame(() => {
                    answer.style.height = '0px';
                });

                window.setTimeout(() => {
                    item.open = false;
                    item.classList.remove('is-closing');
                    answer.style.height = '';
                    item.dataset.animating = 'false';
                }, duration);
                return;
            }

            item.open = true;
            item.classList.add('is-open');
            answer.style.height = '0px';

            requestAnimationFrame(() => {
                answer.style.height = `${answer.scrollHeight}px`;
            });

            window.setTimeout(() => {
                answer.style.height = 'auto';
                item.dataset.animating = 'false';
            }, duration);
        });
    });
