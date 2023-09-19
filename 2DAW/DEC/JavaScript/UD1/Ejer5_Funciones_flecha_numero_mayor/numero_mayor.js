//Escriba una expresión de función de flecha llamada mayor, que pasado un número por parámetro,
// te indique si a es mayor que 20 o a es menor que 20 (en texto).

mayor = (num1) => {
  if (num1 > 20) {
    return num1 + " es mayor que 20";
  } else {
    return num1 + " es menor que 20";
  }
};

console.log(mayor(35));
console.log(mayor(3));
