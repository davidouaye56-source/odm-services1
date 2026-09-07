document.addEventListener("DOMContentLoaded", function () {

    // Année automatique
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // Menu mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("open");
        });

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navigation.classList.remove("open");
            });

        });
    }


    // Formulaire de contact
    const form = document.getElementById("contactForm");

    if (form) {

        // Ne bloque surtout pas Formspree
        form.addEventListener("submit", function () {

            // Vide les champs juste avant la navigation vers Formspree
            setTimeout(function () {
                form.reset();
            }, 50);

        });

    }

});


// Vide le formulaire lorsque la page est restaurée
// avec le bouton "Retour" du navigateur
window.addEventListener("pageshow", function () {

    const form = document.getElementById("contactForm");

    if (form) {
        form.reset();
    }

});