//==================================================
//            FORGOT-PASSWORD.JS
//==================================================

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
                ELEMENTOS
    ==============================================*/

    const forgotForm = document.getElementById("forgotForm");

    const email = document.getElementById("email");

    const card = document.querySelector(".forgot-card");

    /*==============================================
                ANIMACIÓN
    ==============================================*/

    card.classList.add("show");

    /*==============================================
                VALIDACIÓN
    ==============================================*/

    forgotForm.addEventListener("submit", (event) => {

        event.preventDefault();

        email.classList.remove("input-error");

        if(email.value.trim() === ""){

            email.classList.add("input-error");

            return;

        }

        /*
        ==========================================
            AQUÍ SE ENVIARÁ EL CORREO DE
            RECUPERACIÓN CUANDO SE CONECTE
            CON LA BASE DE DATOS.
        ==========================================
        */

        alert(
            "Si el correo existe en el sistema, recibirá un enlace para restablecer su contraseña."
        );

        forgotForm.reset();

    });

});
