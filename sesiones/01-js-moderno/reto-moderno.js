const TAX = 0.13;

export const fullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

export const priceWithTax = (price) => price + price * TAX;

export const greet = (name = "invitado") => `Hola, ${name}!`;

export const getCoords = ([x, y]) => `x: ${x}, y: ${y}`;

export const productLabel = ({ name, price }) => `${name} $${price.toFixed(2)}`;

export const mergeSettings = (defaults, custom) => ({ ...defaults, ...custom });

export const sumAll = (...numeros) => numeros.reduce((total, n) => total + n, 0);

export const copyList = (list) => [...list];

export const addItem = (list, item) => [...list, item];

export const describeRoom = ({ number, type, floor }) =>
  `Habitación ${number} (${type}), piso ${floor}`;

export const nightsTotal = ({ rate, nights, discount = 0 }) => {
  const subtotal = rate * nights;
  return subtotal - subtotal * (discount / 100);
};