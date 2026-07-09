window.addEventListener("load", () => {
    // seleciona o elemento
    const preloader = document.getElementById("preloader");

    // adiciona efeito de fade-out
    preloader.classList.add("fade-out");

    // remove o elemento após a animação
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});
``