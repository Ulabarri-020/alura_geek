import { conexionApi } from "./conexionApi.js";

const formulario=document.querySelector("[data-formulario]");

async function crear_producto(evento){
    evento.preventDefault();
    const nombre =document.querySelector("[data-nombre]").value;
    const precio =document.querySelector("[data-precio]").value;
    const imagen =document.querySelector("[data-imagen]").value;
    if (nombre === "" || precio === "" || imagen === "") {
        alert("Por favor, complete todos los campos");
      } else {
        try {
          
            await conexionApi.crear_producto(nombre,precio,imagen);
            window.location.href="../pages/envio-concluido.html";
        } catch (error) {
          console.error("Error al crear el producto:", error);
        }
    
        form.reset(); // Reinicia el formulario
      }

}
function limpiar() {
    // Limpia el valor de los campos de entrada
    document.querySelector("[data-nombre]").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-imagen]").value = "";
}

//formulario.addEventListener("submit",evento=> crear_producto(evento));
const botonAgregar = document.querySelector("[data-boton-agregar]");
botonAgregar.addEventListener("click", evento => crear_producto(evento));

const botonLimpiar = document.querySelector("[data-boton-limpiar]");
botonLimpiar.addEventListener("click", limpiar);
