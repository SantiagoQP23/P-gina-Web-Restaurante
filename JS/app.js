addEventListener('DomcontenLoaded', () => {
    var btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click'); {
            const menu_items = document.querySelector('.menu_items')
            menu_items.clasList.toggle('show')

        }
    }
})

const navbar = document.querySelector(".menu");

window.addEventListener('scroll', (e) => {
  const y = window.scrollY;

  if(y > 10)
    navbar.classList.add("menu-oscuro");

  if(y <= 10 ) 
    navbar.classList.remove("menu-oscuro");



})

