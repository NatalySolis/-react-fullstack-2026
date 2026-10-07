const carrito = ["Camiseta", "Gorra"];
const carritoNuevo = [...carrito, "Zapatos"];
console.log(carrito);
console.log(carritoNuevo);

const producto = {id:1, nombre: "Gorra", precio: 8};
const productoEnOferta = {...producto, precio:6};
console.log(producto.precio, productoEnOferta.precio);

const sumarTodo = (...numeros) => numeros.reduce((total,n) => total + n, 0);
console.log(sumarTodo(5, 10, 15, 20));

const {id, ...datosSinId} = producto;
console.log(datosSinId)