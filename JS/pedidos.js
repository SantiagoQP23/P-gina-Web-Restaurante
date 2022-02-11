
const selectCategorias = document.querySelector(".select-categorias");
const productosHtml = document.querySelector(".productos");
const detallesTabla = document.querySelector("#detalles-tabla");
const modal = document.querySelector('.modal-producto');


document.addEventListener("DOMContentLoaded", () => {

  let htmlSelectCategorias = ""; 

  categorias.map( c => {
    htmlSelectCategorias += `
      <option value="${c.idCategoria}" >${c.nombreCategoria}</option>
    `

  })

  selectCategorias.innerHTML = htmlSelectCategorias;


const {idCategoria} = categorias[0];
mostrarProductos(idCategoria);

});


const cambiarCategoria = () => {

  const idCategoria = selectCategorias.value;
  mostrarProductos(idCategoria);



}


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
          <img src="${p.pathImg}"
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

}



const aniadirProducto = ( id) => {
  
  console.log("Añadiendo el producto" + id);

  let htmlDetalle = "";

  const p = productos.find(p => p.idProducto === Number(id));

  htmlDetalle = ` 
 
  <article class=" detalle row col-12 p-3 mb-1 ">
  <div class="col-12 col-lg-5 ">
    <h6>${p.nombreProducto}</h6>
    <p>${p.descripcionProducto}</p>
  </div>

  <div class=" col-6 col-lg-2 ">
    <h6>${p.precioProducto}</h6>
  </div>
  
  <div class="col-6 col-lg-2">

    <div class="input-group ">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button">+</button>
      </div>
      <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" style="max-width: 50px !important;">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button">-</button>
      </div>
    </div>
  </div>
  
  
  <div class="col-6 col-lg-2">
    <h6>$10.00</h6>
  </div>

  <div class="col-6 col-lg-1">
    <button class="btn btn-outline-dark" type="button"><i class="bi bi-trash"></i></button>
  </div>




</article>

  `;

  detallesTabla.innerHTML += htmlDetalle;



}






const mostrarProductos = (idCategoria) => {

  console.log("Categoria: " + idCategoria);

  const productosCategoria = productos.filter( p => p.idCategoria === Number(idCategoria));

  let htmlProductos = `
  <h5>PRODUCTOS</h5>
  `;

  productosCategoria.map( p => {

    htmlProductos += `
    <div class="col-12 col-sm-6 col-md-4 mt-1">
  
    <div class="card" style="width: 100%;" >
      <div class="card-body producto">
        <h5 class="card-title">${p.nombreProducto}</h5>
        <h6 class="card-subtitle mb-2 text-muted">$ ${p.precioProducto}</h6>
        <p class="card-text">${p.descripcionProducto}</p>

        <button type="button" class="btn btn-outline-dark btn-sm" onclick="aniadirProducto(${p.idProducto})"><i class="bi bi-cart4" ></i>Añadir</button>
        <button type="button" class="btn btn-outline-dark btn-sm"  onclick="mostrarModal(${p.idProducto})" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="bi bi-eye-fill"></i>Ver</button>
  
      </div>
    </div>
  
  </div>`

  })

  productosHtml.innerHTML = htmlProductos;

}