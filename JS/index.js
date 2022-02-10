
const platos = document.querySelector(".mejores-platos");

document.addEventListener("DOMContentLoaded", () => {

  htmlProductos = "";

  for(let i = 0; i <= 11; i++) {
    const p = productos[i];

    htmlProductos += `
    <div class="col-12 col-sm-6 col-md-4 mt-1">
  
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <h5 class="card-title">${p.nombreProducto}</h5>
        <h6 class="card-subtitle mb-2 text-muted">$ ${p.precioProducto}</h6>
        <p class="card-text">${p.descripcionProducto}</p>
  
      </div>
    </div>
  
  </div>`


  }

  platos.innerHTML = htmlProductos;

})