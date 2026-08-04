// Mobile Menu
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menu && nav) {
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
    const whatsapp = document.querySelector(".whatsapp-float");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";

        if (whatsapp) {
            whatsapp.style.opacity = "1";
            whatsapp.style.visibility = "visible";
        }
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


document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.querySelectorAll("input")[0].value;
    const email = this.querySelectorAll("input")[1].value;
    const project = this.querySelectorAll("input")[2].value;
    const message = this.querySelector("textarea").value;

    const phone = "2349017556609";

    const text = `*New Website Message*

Name: ${name}
Email: ${email}
Project: ${project}

Message:
${message}`;

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
        "_blank"
    );
});

// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
