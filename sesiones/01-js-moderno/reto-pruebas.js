import {
  fullName,
  priceWithTax,
  greet,
  getCoords,
  productLabel,
  mergeSettings,
  sumAll,
  copyList,
  addItem,
  describeRoom,
  nightsTotal,
} from "./reto-moderno.js";

console.log(fullName({ firstName: "Ana", lastName: "López" }));

console.log(priceWithTax(100));

console.log(greet());

console.log(getCoords([3, 7]));

console.log(productLabel({ name: "Gorra", price: 8 }));

console.log(mergeSettings({ tema: "claro", idioma: "es" }, { tema: "oscuro" }));

console.log(sumAll(1, 2, 3, 4));

const listaOriginal = [1, 2];
const listaCopiada = copyList(listaOriginal);
console.log(listaCopiada);

const listaBase = ["a"];
const nuevaLista = addItem(listaBase, "b");
console.log(nuevaLista); 
console.log(listaBase);  

console.log(describeRoom({ number: 101, type: "Suite", floor: 1 }));

console.log(nightsTotal({ rate: 50, nights: 3, discount: 10 }));
