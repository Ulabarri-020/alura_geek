import { conexionApi } from "./conexionApi.js";
const lista = document.querySelector("[data-lista]");
function construyeCard( id,nombre, precio, imagen) {
    console.log(id)
    const producto = document.createElement("li");
    producto.className = "producto__item";
    producto.innerHTML = `
    <div class="card">
        <div class="card_container">
          <img src="${imagen}" alt="${nombre}" class="card__imagen">
            <div class="card-container--info">
                <p class="card__titulo">${nombre}</p>
                <div class="card-container--value">
                    <p class="card__precio">$ ${precio}</p>
                     <button class="eliminar" data-id="${id}">
                                <img src="./img/eliminar.png " class="eliminar-imagen"  />
                        </button>
                </div>
                   <div class="imagen_basura ">
                       
                      </div>
            </div>
        </div>
     </div>
       `;
      addeliminar(id,producto);
    return producto;
}
// Asigna el evento de eliminar producto a la tarjeta
function addeliminar(id,producto) {
    const deleteButton = producto.querySelector(".eliminar");
    deleteButton.addEventListener("click", async () => {
   
      try {
        await conexionApi.deleteProduct(id);
        producto.remove();
        console.log(`Producto con id ${id} eliminado`);
      } catch (error) {
        console.error(`Error al eliminar el producto con id ${id}:`, error);
      }
    });
  }
async function listaProductos() {
    const listaAPI = await conexionApi.listarDatos();
    listaAPI.forEach(element => lista.appendChild(construyeCard( element.id,element.nombre, element.precio, element.imagen)));
}
listaProductos();