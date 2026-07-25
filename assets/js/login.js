//==================================================
//                  LOGIN.JS
//==================================================

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
                MOSTRAR CONTRASEÑA
    ==============================================*/

    const passwordInput = document.getElementById("password");

    const togglePassword = document.getElementById("togglePassword");

    const passwordIcon = togglePassword.querySelector("span");

    togglePassword.addEventListener("click", () => {

        if(passwordInput.type === "password"){

            passwordInput.type = "text";

            passwordIcon.textContent = "visibility";

        }else{

            passwordInput.type = "password";

            passwordIcon.textContent = "visibility_off";

        }

    });

    /*==============================================
                VALIDACIÓN SIMPLE
    ==============================================*/

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const username = document.getElementById("username");

        const password = document.getElementById("password");

        username.classList.remove("input-error");

        password.classList.remove("input-error");

        let valid = true;

        if(username.value.trim() === ""){

            username.classList.add("input-error");

            valid = false;

        }

        if(password.value.trim() === ""){

            password.classList.add("input-error");

            valid = false;

        }

        if(!valid){

            return;

        }

        /*
        ==========================================
            AQUÍ SE CONECTARÁ MÁS ADELANTE
            CON LA BASE DE DATOS
        ==========================================
        */

        window.location.href = "dashboard.html";

    });

    /*==============================================
                ANIMACIÓN
    ==============================================*/

    const card = document.querySelector(".login-card");

    card.classList.add("show");

});