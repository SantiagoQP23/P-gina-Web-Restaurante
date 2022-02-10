
const selectCategorias = document.querySelector(".select-categorias");
const productosHtml = document.querySelector(".productos");


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
  mostrarProductos(idCategoria)
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
  
    <div class="card" style="width: 100%;" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <div class="card-body producto" onclick="mostrarModal(${p.idProducto})">
        <h5 class="card-title">${p.nombreProducto}</h5>
        <h6 class="card-subtitle mb-2 text-muted">$ ${p.precioProducto}</h6>
        <p class="card-text">${p.descripcionProducto}</p>
  
      </div>
    </div>
  
  </div>`

  })

  productosHtml.innerHTML = htmlProductos;

}