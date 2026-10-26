```javascript
// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


// ================================
// SLOW SMOOTH SCROLL
// ================================

const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        event.preventDefault();

        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;

        const startPosition = window.pageYOffset;

        const targetPosition =
            targetSection.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

        const distance = targetPosition - startPosition;

        // Mas malaking value = mas mabilis
        // Mas maliit na value = mas mabagal
        const speed = 0.035;

        let startTime = null;

        function slowScroll(currentTime) {

            if (!startTime) {
                startTime = currentTime;
            }

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / (Math.abs(distance) / speed), 1);

            // Smooth easing
            const easedProgress =
                progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(
                0,
                startPosition + distance * easedProgress
            );

            if (progress < 1) {
                requestAnimationFrame(slowScroll);
            }

        }

        requestAnimationFrame(slowScroll);


        // Close mobile menu
        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// ================================
// HEADER SCROLL EFFECT
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(7, 12, 19, 0.98)";

    } else {

        header.style.background = "rgba(7, 12, 19, 0.94)";

    }

});


// ================================
// ACTIVE NAVIGATION
// ================================

const pageSections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    pageSections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

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

});


// ================================
// PAGE LOAD
// ================================

window.addEventListener("load", () => {

    console.log(
        "Jake V. Ramos Portfolio loaded successfully!"
    );

});
```