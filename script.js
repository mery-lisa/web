document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu-icon");
    const linksdiv = document.querySelector(".links-div");

    menu.addEventListener("click", () => {
        linksdiv.classList.toggle("active");
        menu.classList.toggle("fa-bars");
        menu.classList.toggle("fa-times");
    });
});
