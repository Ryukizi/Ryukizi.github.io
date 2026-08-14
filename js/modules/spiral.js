
export function initSpiral() {

    const spiralContainer = document.querySelector('.spiral__words') || document.querySelector('.spiral__container');
    const baseWords = ['JavaScript', 'CSS3', 'HTML5', 'GSAP', 'C#', 'UI/UX', 'BD', 'Blazor', 'SMTP', 'supabase'];

    const repeatCount = 8;
    const words = [];
    for (let i = 0; i < repeatCount; i++) {
        words.push(...baseWords);
    }

    const angleStep = 0.28;
    const minRadius = 90;
    const wordElements = [];

    if (spiralContainer) {
        spiralContainer.innerHTML = '';
        words.forEach((wordText) => {
            const span = document.createElement('span');
            span.classList.add('spiral__word');
            span.textContent = wordText;
            
            spiralContainer.appendChild(span);
            wordElements.push(span);
        });
    }

    const spiralState = {
        progress: 0.3,
        radiusStep: 2
    };

    function render() {
        words.forEach((wordText, index) => {
            const span = wordElements[index];
            if (!span) return;

            const angle = index * angleStep;

            const baseRadius = minRadius + (Math.pow(index, 1.15) * spiralState.radiusStep);
            const radius = baseRadius * spiralState.progress;

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            const baseScale = 0.7 + (index * 0.012);

            const hoverScale = parseFloat(span.dataset.hoverScale) || 1;
            const finalScale = baseScale * hoverScale;

            // Opacidade para suavizar as bordas
            const opacity = Math.min(1, 1.2 - (radius / 600));

            span.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${finalScale})`;
            span.style.opacity = opacity;
        });
    }

    render();

    gsap.to(spiralState, {
        progress: 2.5,       
        radiusStep: 6,      
        ease: "power1.out",
        onUpdate: render,
        scrollTrigger: {
            trigger: ".spiral-scroll-wrapper", 
            start: "top top",                  
            end: "bottom bottom",             
            scrub: 1.2 
        }
    });

    wordElements.forEach((span) => {
        span.dataset.hoverScale = 1;

        span.addEventListener('pointerenter', () => {
            gsap.to(span.dataset, {
                hoverScale: 1.4,
                duration: 0.2,
                overwrite: 'auto',
                onUpdate: render
            });
            
            gsap.to(span, {
                color: '#61dafb',
                textShadow: '0px 0px 15px rgba(97, 218, 251, 0.8)',
                duration: 0.2,
                overwrite: 'auto'
            });
        });

        span.addEventListener('pointerleave', () => {
            gsap.to(span.dataset, {
                hoverScale: 1,
                duration: 0.2,
                overwrite: 'auto',
                onUpdate: render
            });

            gsap.to(span, {
                color: '#ffffff',
                textShadow: '0px 0px 0px rgba(0,0,0,0)',
                duration: 0.2,
                overwrite: 'auto'
            });
        });
    });

    // -------------------------------------------------------------
    // 🔥 TRANSIÇÃO PERFEITA: ESPIRAL SUMI -> SKILLS APARECE
    // -------------------------------------------------------------

    gsap.to(".spiral__words", {
        opacity: 0,
        scale: 1.3, 
        ease: "power2.in",
        scrollTrigger: {
            trigger: ".spiral-scroll-wrapper",
            start: "50% top",  
            end: "70% top",    
            scrub: true
        }
    });

    gsap.to(".skills", {
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".spiral-scroll-wrapper",
            start: "72% top",   
            end: "92% top",     
            scrub: true,
            onUpdate: (self) => {
                const overlay = document.querySelector('.skills');
                if (overlay) {
                    if (self.progress > 0.2) {
                        overlay.classList.add('active');
                    } else {
                        overlay.classList.remove('active');
                    }
                }
            }
        }
    });
};