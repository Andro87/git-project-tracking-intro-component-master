
const mobileMenu = document.getElementById("mobile--menu");
const circle = document.getElementById("circle");
const opened = document.getElementById("icon--hamburger");
const  closed= document.getElementById("icon--close");



const showMenu = e =>{
    e.preventDefault();
    mobileMenu.classList.add("menu--mobile");
    circle.classList.remove("circle");
    circle.classList.add("circle--mobile");
    opened.style.display=("none");
    closed.style.display=("block");
};

const hideMenu = e =>{
    e.preventDefault();
    mobileMenu.classList.remove("menu--mobile");
    opened.style.display=("block");
    closed.style.display=("none");
}

opened.addEventListener("click",showMenu);
closed.addEventListener("click",hideMenu);