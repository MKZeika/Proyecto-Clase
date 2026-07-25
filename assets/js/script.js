//==========================================
// Menú móvil
//==========================================

const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("show-menu");

});

//==========================================
// Header al hacer scroll
//==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.classList.add("header-scroll");

    }else{

        header.classList.remove("header-scroll");

    }

});

//==========================================
// Scroll suave para enlaces
//==========================================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

//==========================================
// Animación de aparición
//==========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".card, .service-card, .stat-item").forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});