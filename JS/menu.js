

var myInput = document.getElementById('myInput')



const categoriasHTML = document.querySelector(".categorias");

const modal = document.querySelector('.modal-producto');

const exampleModal = document.getElementById('exampleModal');

const mostrarModal = (idProducto) => {

  console.log("Mostrando el producto: " + idProducto);

  const p = productos.find( p => p.idProducto === idProducto);
  console.log(p);

  const modalContent = ` <div class="modal-content" >
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">${p.nombreProducto}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>  
  <div class="modal-body">
    <div class="row">
  
      <div class="col-12 col-md-12  col-lg-6">
  
        <div class="img-producto-modal">
          <img src="https://images-gmi-pmc.edge-generalmills.com/2e80349f-8df5-4903-a8ec-7ed47c590761.jpg"
            class="img-fluid img-producto" alt="...">
        </div>
  
  
      </div>
  
      <div class="col-12 col-md-12  col-lg-6">
        <h5>${p.nombreProducto}</h5>
        <span>Camarón</span>
        <br>
        <span>Ingredientes</span>
        <p>${p.descripcionProducto}</p>
  
        <div class="inf-producto">

          <img class="img-inf-producto" src="https://zendal.com/wp-content/uploads/2018/10/medio-ambiente-1.png">
          <img class="img-inf-producto" src="https://zendal.com/wp-content/uploads/2018/10/medio-ambiente-1.png">
          <img class="img-inf-producto" src="https://zendal.com/wp-content/uploads/2018/10/medio-ambiente-1.png">
          
        </div>
  
  
  
  
      </div>
  
    </div>

  </div>  
  <div class="modal-footer" >

  </div>  
</div>  `

  modal.innerHTML = modalContent;

  exampleModal.boostrap.show();

}






document.addEventListener("DOMContentLoaded", () => {
  

  
  categorias.map( c => {
    let htmlCategoria = " ", htmlProductos = " ";
    productosCategoria = productos.filter( p => p.idCategoria === c.idCategoria);
    
    
    productosCategoria.map( p => {

      htmlProductos += `
      <div class="col-12 col-sm-6 col-md-4 mt-1">
    
      <div class="card" style="width: 100%;" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="card-body producto" onclick="mostrarModal(${p.idProducto})">
          <h5 class="card-title">${p.nombreProducto}</h5>
          <h6 class="card-subtitle mb-2 text-muted">$ ${p.precioProducto}</h6>
          <p class="card-text">${p.descripcionProducto}</p>
    
        </div>
      </div>
    
    </div>`

    })


    htmlCategoria = `
    <section >
      <h4 class="text-center">${c.nombreCategoria.toUpperCase()}</h4>

      <div class="row mt-5 mb-5">
        ${htmlProductos}

      </div>


    </section>

    `
    categoriasHTML.innerHTML += htmlCategoria;


  })






})