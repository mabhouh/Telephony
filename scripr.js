
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function(){
    navbar.classList.toggle ("sticky", this.window.scrollY > 0);
})


document.querySelector(".bx-menu-alt-left").addEventListener("click" , () =>{
    document.querySelector(".nav-items").classList.toggle("active")
});