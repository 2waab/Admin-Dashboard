const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".them-toggler");
const themeIcons = themeToggler.querySelectorAll("span");

menuBtn.addEventListener("click", () => {
    sideMenu.style.left = "0";
});
closeBtn.addEventListener("click", () => {
    sideMenu.style.left = "-100%";
});
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    themeIcons.forEach((span) => {
        span.classList.toggle("active");
    });
});