//==================================================
//                DASHBOARD.JS
//==================================================

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
                    ELEMENTOS
    ==============================================*/

    const sidebar = document.querySelector(".sidebar");

    const modal = document.getElementById("appointmentModal");

    const openButtons = document.querySelectorAll(".open-modal");

    const closeButton = document.querySelector(".close-modal");

    const cancelButton = document.querySelector(".btn-secondary");

    const appointmentForm = document.querySelector(".appointment-form");

    const quickButtons = document.querySelectorAll(".quick-actions button");

    const animatedElements = document.querySelectorAll(
        ".panel, .stat-card, .patient-card"
    );

    /*==============================================
                MENÚ RESPONSIVE
    ==============================================*/

    const menuButton = document.createElement("button");

    menuButton.classList.add("menu-toggle");

    menuButton.innerHTML = `
        <span class="material-symbols-outlined">
            menu
        </span>
    `;

    document.querySelector(".topbar").prepend(menuButton);

    menuButton.addEventListener("click", () => {

        sidebar.classList.toggle("active");

    });

    /*==============================================
                CERRAR SIDEBAR
    ==============================================*/

    document.addEventListener("click", (event) => {

        if(window.innerWidth > 768){

            return;

        }

        if(
            !sidebar.contains(event.target) &&
            !menuButton.contains(event.target)
        ){

            sidebar.classList.remove("active");

        }

    });

    /*==============================================
                    MODAL
    ==============================================*/

    function openModal(){

        if(!modal){

            return;

        }

        modal.classList.add("active");

    }

    function closeModal(){

        if(!modal){

            return;

        }

        modal.classList.remove("active");

    }

    openButtons.forEach(button => {

        button.addEventListener("click", openModal);

    });

    quickButtons.forEach(button => {

        if(

            button.textContent
                .toLowerCase()
                .includes("cita")

        ){

            button.classList.add("open-modal");

            button.addEventListener("click", openModal);

        }

    });

    if(closeButton){

        closeButton.addEventListener("click", closeModal);

    }

    if(cancelButton){

        cancelButton.addEventListener("click", closeModal);

    }

    if(modal){

        modal.addEventListener("click", (event) => {

            if(event.target === modal){

                closeModal();

            }

        });

    }

    /*==============================================
                FORMULARIO
    ==============================================*/

    if(appointmentForm){

        appointmentForm.addEventListener("submit", (event) => {

            event.preventDefault();

            alert("La cita ha sido registrada correctamente.");

            appointmentForm.reset();

            closeModal();

        });

    }

    /*==============================================
                ANIMACIÓN SCROLL
    ==============================================*/

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:0.15

        }

    );

    animatedElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });

    /*==============================================
                EFECTO HEADER
    ==============================================*/

    const topbar = document.querySelector(".topbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 25){

            topbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

            topbar.style.background = "#FFFFFF";

        }

        else{

            topbar.style.boxShadow = "none";

            topbar.style.background = "transparent";

        }

    });

});