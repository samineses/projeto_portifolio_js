window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    // segurança: verifica se existe
    if (preloader) {
        preloader.classList.add("fade-out");

        setTimeout(() => {
            preloader.remove(); // melhor que display: none
        }, 500);
    }
});