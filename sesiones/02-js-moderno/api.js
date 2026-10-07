import { productos } from "./productos";

const BASE_URL = "https://dummyjson.com";

//Todas las peticiones pasan por aquí
const peticion = async (ruta) => {
    const respuesta = await fetch(`${BASE_URL}${ruta}`, {
        signal: AbortSignal.timeout(8000),
    });
    if (!respuesta.ok){
        throw new Error(`Error ${respuesta.status} al consultar ${ruta}`);
    }
    return respuesta.json();
}

export const obtenerProductos = async ({limite = 12, salto = 0} = {}) = {
    const datos = await peticion(`/products?limit=${limite}&skip=${salto}`);
    return {productos: datos.products, total: datos.total};

}