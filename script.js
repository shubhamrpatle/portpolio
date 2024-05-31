var typed = new Typed(".text", {
    strings: ["Backend Developer " , "Programmer " , "Web Developer "],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})


const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider)=>{
    slider.style.width = ""+slider.getAttribute("data-score")+"%";
    console.log(""+slider.getAttribute("data-score")+"%");
})



const menuOpener = document.querySelector(".menu-open");
const menuCloser = document.querySelector(".menu-close");
const navbar = document.getElementById("navbar");

menuOpener.addEventListener("click", ()=>{
    if(navbar.classList.contains("menu-closing")){
        navbar.classList.remove("menu-closing");
    }
    navbar.classList.add("menu-opening");
})

menuCloser.addEventListener("click", ()=>{
    if(navbar.classList.contains("menu-opening")){
        navbar.classList.remove("menu-opening");
    }
    navbar.classList.add("menu-closing");
})



const navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach((element)=>{
    element.addEventListener("click", ()=>{
        if(navbar.classList.contains("menu-opening")){
            navbar.classList.remove("menu-opening");
        }
        navbar.classList.add("menu-closing");
    })
})
