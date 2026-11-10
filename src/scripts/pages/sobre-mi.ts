import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('.about-achievements__item');
        if (!items.length) return;

        const animations = items.map((item) => gsap.fromTo(item,
            { autoAlpha: 0, y: 34 },
            {
                autoAlpha: 1,
                y: 0,
                duration: .7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 82%',
                    toggleActions: 'play none none reverse',
                },
            },
        ));

        return () => animations.forEach((animation) => animation.scrollTrigger?.kill());
    });
