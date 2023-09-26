// Copia este código dentro de VSC
let persona = {nombre: "NombreInventado", profesion: "Informático DAW"};

// Al copiar los valores de un objeto no estamos copiando dichos valores,
// sino la la referencia al espacio de memoria.

let antonioObj = persona;

antonioObj.nombre = "Pepito";
antonioObj.edad = "55";

console.log(antonioObj.nombre);
console.log(persona.nombre);

console.log(antonioObj.profesion);
console.log(persona.profesion);

// ¿Qué está pasando? -- Se copia el primer atributo del objeto
// Realiza y prueba cómo se desestructura un objeto.
// Mira la teoría y soluciona el problema.

//SOLUCION
let persona1 = {nombre: "NombreInventado", profesion: "Informático DAW"};

let antonioObj1 = Object.assign(persona1);

antonioObj1.nombre = "Pepito";
antonioObj1.edad = "55";

console.log(antonioObj1.nombre);
console.log(persona1.nombre);

console.log(antonioObj1.profesion);
console.log(persona1.profesion);
console.log(antonioObj1.edad);