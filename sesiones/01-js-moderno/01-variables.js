const IVA = 0.13;
let cantidad = 1;
cantidad = cantidad + 2;

const producto = {nombre: "Camiseta", precio: 12.5};
producto.precio = 10;
console.log("Cantidad:", cantidad);
console.log("Precio con IVA", (producto.precio * (1 + IVA)).toFixed(2));