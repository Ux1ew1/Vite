window.addEventListener("load", () => {
    const skeletons = document.querySelectorAll(".skeleton");

    skeletons.forEach(function (elements) {
        elements.classList.remove("skeleton");
    });
});

// Иконки heart /
const hearts = document.querySelectorAll(".card-heart");

hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("heart-active");
    });
});
