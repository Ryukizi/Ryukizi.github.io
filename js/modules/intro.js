export function runPixarIntro() {
    document.body.style.overflow = 'hidden';

    const overlay = document.getElementById('intro-overlay');
    const letraA = document.getElementById('letra-A');
    const letraE = document.getElementById('letra-E');
    const todasLetras = document.querySelectorAll('.intro__wrapper .letter');

    if (!overlay || !letraA || !letraE) return;

    const rectA = letraA.getBoundingClientRect();
    const rectE = letraE.getBoundingClientRect();
    const rectWrapper = overlay.querySelector('.intro__wrapper').getBoundingClientRect();

    const centroA = (rectA.left + rectA.width / 2) - rectWrapper.left;
    const targetX = centroA - (rectE.width / 2);
    const alturaA = rectA.height;

    gsap.set(letraE, {
        x: targetX,
        y: -300,
        opacity: 1,
        transformOrigin: "center bottom"
    });

    const tl = gsap.timeline({
        onComplete: () => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    tl.to(letraE, {
        y: -alturaA,
        duration: 0.25,
        ease: "power2.in"
    })

    .to(letraE, { y: -(alturaA + 20), scaleY: 1.2, scaleX: 0.85, duration: 0.12, ease: "power1.out" })
    .to(letraE, { y: -alturaA, scaleY: 0.85, scaleX: 1.15, duration: 0.1, ease: "power1.in" })
    .to(letraE, { scaleY: 1, scaleX: 1, duration: 0.05 }) // Volta ao normal

    .to(letraE, { y: -(alturaA + 40), scaleY: 1.25, scaleX: 0.8, duration: 0.15, ease: "power1.out" })
    .to(letraE, { y: 0, scaleY: 1.3, scaleX: 0.75, duration: 0.1, ease: "power2.in" })

    .set(letraA, {
        visibility: "hidden",
        opacity: 0
    })

    .to(letraE, { scaleY: 0.6, scaleX: 1.35, duration: 0.06, ease: "power2.out" })
    .to(letraE, { scaleY: 1, scaleX: 1, duration: 0.12, ease: "elastic.out(1.2, 0.4)" })

    .to({}, { duration: 0.5 })

    .to(todasLetras, {
        letterSpacing: "-0.5em",
        scaleX: 0.6,   
        duration: 0.4,
        ease: "power3.in",
        stagger: {
            from: "center",
            amount: 0.1
        }
    }, "+=0.2")

    .to("#intro-overlay", {
        scale: 2.5,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    })

    .to(overlay, {
        opacity: 0,
        scale: 1.12,
        duration: 0.7,
        ease: "power3.inOut"
    }, "+=0.1");
}
