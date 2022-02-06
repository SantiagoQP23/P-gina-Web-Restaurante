
const navbar = document.querySelector(".menu");

window.addEventListener('scroll', (e) => {
  const y = window.scrollY;

  if(y > 10)
    navbar.classList.add("menu-oscuro");

  if(y <= 10 ) 
    navbar.classList.remove("menu-oscuro");

})


const btnMenu = document.querySelector(".btn-menu");

window.addEventListener('click', (e) => {
  console.log("Mostrando ")
  navbar.classList.toggle("menu-responsivo")



})
