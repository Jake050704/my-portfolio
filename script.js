// ================================
// JAKE V. RAMOS - PORTFOLIO
// ================================

console.log("Welcome to Jake V. Ramos Portfolio!");


// ================================
// SLOW SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            const startPosition = window.scrollY;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY;

            const distance =
                targetPosition - startPosition;

            const duration = 1200;

            let startTime = null;


            function animation(currentTime) {

                if (startTime === null) {
                    startTime = currentTime;
                }

                const timeElapsed =
                    currentTime - startTime;

                const progress =
                    Math.min(
                        timeElapsed / duration,
                        1
                    );


                // Smooth easing effect

                const ease =
                    progress < 0.5
                        ? 2 * progress * progress
                        : 1 -
                          Math.pow(
                              -2 * progress + 2,
                              2
                          ) / 2;


                window.scrollTo(
                    0,
                    startPosition +
                    distance * ease
                );


                if (progress < 1) {

                    requestAnimationFrame(
                        animation
                    );

                }

            }


            requestAnimationFrame(animation);

        }

    });

});


// ================================
// PAGE LOADED
// ================================

window.addEventListener("load", function() {

    console.log(
        "Jake V. Ramos Portfolio successfully loaded!"
    );

});