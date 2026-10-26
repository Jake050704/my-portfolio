// ======================================
// SMOOTH SCROLL
// ======================================

const navigationLinks = document.querySelectorAll(".nav-links a");
const buttons = document.querySelectorAll(".btn");

function smoothScroll(target) {

    const element = document.querySelector(target);

    if (!element) return;

    const header = document.querySelector("header");

    const headerHeight = header
        ? header.offsetHeight
        : 0;

    const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset;

    const offsetPosition =
        elementPosition - headerHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}


// Navigation links
navigationLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = this.getAttribute("href");

        smoothScroll(target);

    });

});


// Hero buttons
buttons.forEach(button => {

    button.addEventListener("click", function(event) {

        const target = this.getAttribute("href");

        if (target && target.startsWith("#")) {

            event.preventDefault();

            smoothScroll(target);

        }

    });

});


// ======================================
// ACTIVE NAVIGATION
// ======================================

const pageSections = document.querySelectorAll("section");

function updateActiveNavigation() {

    let currentSection = "home";

    const scrollPosition =
        window.scrollY +
        window.innerHeight * 0.35;

    pageSections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {

            currentSection = section.id;

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);


// ======================================
// HEADER BACKGROUND
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(7, 12, 19, 0.99)";

    } else {

        header.style.background =
            "rgba(7, 12, 19, 0.97)";

    }

});


// ======================================
// PAGE LOAD
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "Jake V. Ramos Portfolio loaded successfully!"
    );

});