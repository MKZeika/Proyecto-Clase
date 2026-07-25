//==================================================
//                REGISTER.JS
//==================================================

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
            ELEMENTOS
    ==============================================*/

    const registerForm = document.getElementById("registerForm");

    const password = document.getElementById("password");

    const confirmPassword = document.getElementById("confirmPassword");

    const togglePassword = document.getElementById("togglePassword");

    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

    /*==============================================
        MOSTRAR / OCULTAR CONTRASEÑA
    ==============================================*/

    function toggleVisibility(input, button){

        const icon = button.querySelector("span");

        if(input.type === "password"){

            input.type = "text";

            icon.textContent = "visibility";

        }else{

            input.type = "password";

            icon.textContent = "visibility_off";

        }

    }

    togglePassword.addEventListener("click", () => {

        toggleVisibility(password, togglePassword);

    });

    toggleConfirmPassword.addEventListener("click", () => {

        toggleVisibility(confirmPassword, toggleConfirmPassword);

    });

    /*==============================================
            VALIDACIÓN
    ==============================================*/

    registerForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const inputs = registerForm.querySelectorAll("input");

        inputs.forEach(input => {

            input.classList.remove("input-error");

        });

        let valid = true;

        inputs.forEach(input => {

            if(input.hasAttribute("required") && input.value.trim() === ""){

                input.classList.add("input-error");

                valid = false;

            }

        });

        if(password.value !== confirmPassword.value){

            password.classList.add("input-error");

            confirmPassword.classList.add("input-error");

            alert("Las contraseñas no coinciden.");

            return;

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

        alert("Cuenta creada correctamente.");

        window.location.href = "login.html";

    });

    /*==============================================
            ANIMACIÓN
    ==============================================*/

    document.querySelector(".register-card").classList.add("show");

});