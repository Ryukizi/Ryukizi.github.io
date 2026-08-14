export function initCarousel (){
    const slider = document.querySelector('.projects__slider');

    if (slider) {
        // Duplicamos o conteúdo interno para criar o efeito de loop infinito sem buracos
        slider.innerHTML += slider.innerHTML;

        // Animação contínua indo da direita para a esquerda
        const loopAnimation = gsap.to(slider, {
            xPercent: -50, // Move metade do caminho (onde começa a cópia)
            ease: "none",
            duration: 30, // Velocidade do carrossel (aumente para ficar mais lento)
            repeat: -1    // Repete infinitamente
        });

        // Pausa a animação quando o usuário passa o mouse por cima do projeto
        slider.addEventListener('pointerenter', () => loopAnimation.pause());
        
        // Retoma o movimento quando o mouse sai de cima
        slider.addEventListener('pointerleave', () => loopAnimation.play());
    }
}

