// Mobile Menu
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menu & nav) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Sticky Navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topBtn) {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
