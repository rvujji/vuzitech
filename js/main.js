/*=========================================================
    VUZI TECH WEBSITE V3
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHeader();

    initRevealAnimations();

    initCounters();

    initSmoothScroll();

});

/*=========================================================
HEADER
=========================================================*/

function initHeader(){

    const header = document.querySelector(".header");

    function updateHeader(){

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

}

/*=========================================================
REVEAL ANIMATION
=========================================================*/

function initRevealAnimations(){

    const elements = document.querySelectorAll(
        "section, .service-card, .industry-card, .fleet-item, .timeline-item"
    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },{
        threshold:0.15
    });

    elements.forEach(el=>{

        el.classList.add("reveal");

        observer.observe(el);

    });

}

/*=========================================================
COUNTER ANIMATION
=========================================================*/

function initCounters(){

    const counters=document.querySelectorAll(".hero-stat h2");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        });

    });

    counters.forEach(counter=>observer.observe(counter));

}

function animateCounter(counter){

    const original=counter.innerText;

    const value=parseInt(original.replace(/[^0-9]/g,""));

    if(isNaN(value)) return;

    let current=0;

    const increment=Math.max(1,Math.ceil(value/60));

    const interval=setInterval(()=>{

        current+=increment;

        if(current>=value){

            counter.innerText=original;

            clearInterval(interval);

        }else{

            if(original.includes("₹")){

                counter.innerText="₹"+current+"+";

            }

            else if(original.includes("+")){

                counter.innerText=current+"+";

            }

            else{

                counter.innerText=current;

            }

        }

    },25);

}

/*=========================================================
SMOOTH SCROLL
=========================================================*/

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}