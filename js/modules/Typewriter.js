export function initTypewriterContact() {
    const titleText = "Contate-me";

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#contato",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // 1. Digita o Título normalmente (fica ótimo porque é curto)
    tl.to("#typed-title", {
        duration: 0.8,
        text: titleText,
        ease: "none"
    })
    // 2. Revela o parágrafo de forma ultra fluida (da esquerda pra direita)
    .to(".reveal-text", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.8,
        ease: "power1.inOut"
    }, "+=0.1")
}