console.log("Welcome to Devi's Portfolio");
/* ==========================================
   DEVI PORTFOLIO
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Smooth Navbar Shadow
    =========================== */

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        } else {

            nav.style.boxShadow = "none";

        }

    });


    /* ===========================
       Reveal Animation
    =========================== */

    const revealItems = document.querySelectorAll(
        ".framework-card, .project-card, .metric, .mindset-item"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold:0.15

    });

    revealItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all .8s ease";

        observer.observe(item);

    });


    /* ===========================
       Counter Animation
    =========================== */

    const counters = document.querySelectorAll(".metric h1");

    const counterObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const counter = entry.target;

            const text = counter.innerText;

            if(text === "∞") return;

            const target = parseInt(text);

            let current = 0;

            const speed = target / 60;

            const update = ()=>{

                current += speed;

                if(current < target){

                    counter.innerText = Math.ceil(current) + "+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            }

            update();

            counterObserver.unobserve(counter);

        })

    });

    counters.forEach(counter=>{

        counterObserver.observe(counter);

    });


    /* ===========================
       Active Navigation
    =========================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", ()=>{

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 150;

            const height = section.clientHeight;

            if(pageYOffset >= top){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });


    /* ===========================
       Button Hover Ripple
    =========================== */

    const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform = "translateY(-4px) scale(1.02)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform = "translateY(0) scale(1)";

        });

    });

});