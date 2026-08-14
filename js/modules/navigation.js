export function initNavigation() {
    const btnProjetos = document.querySelector("#btnProjetos");
    const menuLinks = document.querySelectorAll(".menu__link");

    // Botão extra que vai direto para projetos (ex: botão "Ver Projetos" da Hero)
    if (btnProjetos) {
        btnProjetos.addEventListener("click", () => {
            document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Funciona para TODOS os links da navbar automaticamente
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");

            // Verifica se o href é um id interno (começa com '#')
            if (targetId && targetId.startsWith("#") && targetId !== "#") {
                e.preventDefault(); // Impede o pulo seco/brusco padrão do navegador

                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ 
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }

            // Marca o item clicado como ativo e desmarca os outros
            menuLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });
}