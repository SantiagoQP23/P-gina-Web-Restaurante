
//import productos from './BD'

const navbar = document.querySelector(".menu");

window.addEventListener('scroll', (e) => {
  const y = window.scrollY;

  if (y > 10)
    navbar.classList.add("menu-oscuro");

  if (y <= 10)
    navbar.classList.remove("menu-oscuro");

})


const btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener('click', (e) => {
  navbar.classList.toggle("bg-black")

});


//console.log(productos);



