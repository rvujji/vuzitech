// ======================================
// VUZI TECH WEBSITE
// main.js
// ======================================

// Current Year for Footer
document.addEventListener("DOMContentLoaded", () => {


const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


});

// ======================================
// Simple Fade In Animation
// ======================================

const observer = new IntersectionObserver(


(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}


);

document.querySelectorAll(".fade-in").forEach(el => {


observer.observe(el);


});

// ======================================
// Smooth Scroll Support
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {


anchor.addEventListener('click', function (e) {

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth'
        });

    }

});


});

// ======================================
// Header Shadow On Scroll
// ======================================

window.addEventListener("scroll", () => {


const header = document.querySelector(".header");

if (!header) return;

if (window.scrollY > 50) {

    header.style.boxShadow =
        "0 6px 20px rgba(0,0,0,0.08)";

} else {

    header.style.boxShadow =
        "0 2px 20px rgba(0,0,0,0.04)";
}


});

// ======================================
// Future Mobile Menu Placeholder
// ======================================

function toggleMobileMenu() {


const menu = document.querySelector("nav");

if (!menu) return;

menu.classList.toggle("mobile-open");


}
