//Nos proporcionan el siguiente array: ["Desarrollo de Aplicaciones Web",12345678,
//"Administración de Sistemas Informáticos en Red",87654321, "Desarrollo de Aplicaciones Multiplataforma", 12348765].
// Debemos de crear otro array donde insertemos nuestro curso y código (derecha). Además, debemos de utilizar el método find(),
//el typeof (para saber el tipo) y el "idx" para el índice.

var array = new Array(
  "Desarrollo de Aplicaciones Web",
  12345678,
  "Administración de Sistemas Informáticos en Red",
  87654321,
  "Desarrollo de Aplicaciones Multiplataforma",
  12348765
);

var array2 = new Array();

array.find((el, idx) => typeof el === "string" && idx === 0);

console.log( array.find((el, idx) => typeof el === "string" && idx === 0) + " " +
    array.find((el, idx) => typeof el === "number" && idx === 1)
);

array2.push(array.find((el, idx) => typeof el === "string" && idx === 0));
array2.push(array.find((el, idx) => typeof el === "number" && idx === 1));

console.log(array2);
