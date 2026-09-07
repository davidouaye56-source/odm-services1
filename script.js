document.addEventListener("DOMContentLoaded", function () {

    // Année automatique dans le footer
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Formulaire de contact
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const button = form.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;

            button.disabled = true;
            button.innerHTML = "Envoi en cours...";

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (response.ok) {

                    // Vider tous les champs
                    form.reset();

                    // Message de confirmation
                    let successMessage = document.getElementById("formSuccess");

                    if (!successMessage) {
                        successMessage = document.createElement("p");
                        successMessage.id = "formSuccess";
                        successMessage.textContent =
                            "✓ Votre message a bien été envoyé. Nous vous répondrons rapidement.";
                        successMessage.style.marginTop = "15px";
                        successMessage.style.fontWeight = "700";
                        successMessage.style.color = "#1f8f45";

                        form.appendChild(successMessage);
                    }

                    button.innerHTML = "Message envoyé ✓";

                    // Remettre le bouton normalement après quelques secondes
                    setTimeout(function () {
                        button.disabled = false;
                        button.innerHTML = originalText;
                    }, 4000);

                } else {
                    throw new Error("Erreur lors de l'envoi");
                }

            } catch (error) {

                button.disabled = false;
                button.innerHTML = originalText;

                alert(
                    "Impossible d'envoyer le message pour le moment. Veuillez réessayer."
                );
            }
        });
    }

});