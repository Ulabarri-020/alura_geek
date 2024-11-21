const BASE_URL = "http://localhost:3002/productos";
async function listarDatos() {
    const conexion= await fetch(BASE_URL);
    const conexionConvertida=conexion.json();

    console.log(conexionConvertida);
    return conexionConvertida;

}
async function crear_producto(nombre,precio,imagen) {
    const conexion = await fetch(BASE_URL,{
        method:"POST",
        headers:{
            "Content-type":"aplication/json"
        },
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
            
        })
    })
    
    const conexionConvertida=conexion.json();
    return conexionConvertida;
    
};
const deleteProduct = async (id) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(`Producto con id ${id} eliminado exitosamente`);
    } catch (error) {
      console.error("Error en la solicitud DELETE:", error);
    }
  };
export const conexionApi={
    listarDatos,crear_producto,deleteProduct

}
listarDatos();