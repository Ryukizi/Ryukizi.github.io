
export function initScrambleEffects() {
    const elements = document.querySelectorAll('.scramble-text');
    if (!elements.length) return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

    elements.forEach((el) => {
        if (!el.dataset.originalText) {
            el.dataset.originalText = el.textContent.trim();
        }
    });

    const animateElement = (el) => {
        const originalText = el.dataset.originalText;
        if (!originalText) return;

        el.classList.add('active');

        let iteration = 0;
        clearInterval(el.intervalId);

        el.intervalId = setInterval(() => {
            el.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iteration || char === ' ' || char === '\n') {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            if (iteration >= originalText.length) {
                el.textContent = originalText;
                clearInterval(el.intervalId);
            }

            // Velocidade adaptativa
            iteration += originalText.length > 30 ? 3 : 1; 
        }, 25);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
}

