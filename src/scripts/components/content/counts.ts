const startCounters = () => {
        document.querySelectorAll<HTMLElement>('[data-counts]').forEach((container) => {
            if (container.dataset.countsStarted) return;
            container.dataset.countsStarted = 'true';

            const animate = () => {
                container.querySelectorAll<HTMLElement>('[data-count-value]').forEach((valueElement) => {
                    const target = Number(valueElement.closest('[data-count-target]')?.getAttribute('data-count-target') ?? 0);
                    const start = performance.now();
                    const duration = 1600;

                    const update = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        valueElement.textContent = Math.floor(target * eased).toLocaleString('es-CL');

                        if (progress < 1) requestAnimationFrame(update);
                    };

                    requestAnimationFrame(update);
                });
            };

            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                container.querySelectorAll<HTMLElement>('[data-count-value]').forEach((valueElement) => {
                    const target = Number(valueElement.closest('[data-count-target]')?.getAttribute('data-count-target') ?? 0);
                    valueElement.textContent = target.toLocaleString('es-CL');
                });
                return;
            }

            if (!('IntersectionObserver' in window)) {
                animate();
                return;
            }

            const observer = new IntersectionObserver((entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    animate();
                    observer.disconnect();
                }
            }, { threshold: 0.2 });

            observer.observe(container);
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startCounters, { once: true });
    } else {
        startCounters();
    }
