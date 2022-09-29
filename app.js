const BTN=document.querySelector(".showNavBTN");
const BTN2=document.querySelector(".close");

const nav=document.querySelector(".nav");
BTN.addEventListener("click",()=>{
    nav.classList.add("active")
})
BTN2.addEventListener("click",()=>{
    nav.classList.remove("active")
})

