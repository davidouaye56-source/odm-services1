/* =====================================================
   ODM SERVICES
   JAVASCRIPT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ================= ANNÉE ================= */

        const year =
            document.getElementById("year");

        if (year) {

            year.textContent =
                new Date().getFullYear();

        }



        /* ================= MENU MOBILE ================= */

        const menuToggle =
            document.querySelector(
                ".menu-toggle"
            );

        const navigation =
            document.querySelector(
                ".navigation"
            );


        if (
            menuToggle &&
            navigation
        ) {

            menuToggle.addEventListener(
                "click",
                () => {

                    navigation.classList.toggle(
                        "open"
                    );

                }
            );


            navigation
                .querySelectorAll("a")
                .forEach(
                    link => {

                        link.addEventListener(
                            "click",
                            () => {

                                navigation.classList.remove(
                                    "open"
                                );

                            }
                        );

                    }
                );

        }



        /* ================= NAVIGATION FLUIDE ================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        event => {

                            const target =
                                document.querySelector(
                                    link.getAttribute(
                                        "href"
                                    )
                                );


                            if (!target) {

                                return;

                            }


                            event.preventDefault();


                            target.scrollIntoView({

                                behavior:
                                    "smooth",

                                block:
                                    "start"

                            });

                        }
                    );

                }
            );



        /* ================= FORMULAIRE ================= */

        const form =
            document.getElementById(
                "contactForm"
            );


        if (form) {

            form.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    const name =
                        document
                            .getElementById("name")
                            .value
                            .trim();


                    const email =
                        document
                            .getElementById("email")
                            .value
                            .trim();


                    const phone =
                        document
                            .getElementById("phone")
                            .value
                            .trim();


                    const message =
                        document
                            .getElementById("message")
                            .value
                            .trim();



                    const subject =
                        encodeURIComponent(
                            `Demande de contact ODM Services - ${name}`
                        );


                    const body =
                        encodeURIComponent(

                            `Nom : ${name}\n` +

                            `Email : ${email}\n` +

                            `Téléphone : ${
                                phone ||
                                "Non renseigné"
                            }\n\n` +

                            `Message :\n${message}`

                        );



                    window.location.href =
                        `mailto:davidouaye56@gmail.com?subject=${subject}&body=${body}`;

                }
            );

        }



        /* ================= MENU ACTIF ================= */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );

        const navLinks =
            document.querySelectorAll(
                ".navigation a"
            );


        const updateActiveMenu =
            () => {

                let current =
                    "accueil";


                sections.forEach(
                    section => {

                        const sectionTop =
                            section.offsetTop - 150;


                        if (
                            window.scrollY >=
                            sectionTop
                        ) {

                            current =
                                section.id;

                        }

                    }
                );


                navLinks.forEach(
                    link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${current}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            };


        window.addEventListener(
            "scroll",
            updateActiveMenu
        );


        updateActiveMenu();

    }
);