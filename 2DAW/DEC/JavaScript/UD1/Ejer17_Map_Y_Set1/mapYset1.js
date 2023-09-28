const mapweb = new Map();
mapweb.set("DEC", "Desarrollo Web en Entorno Cliente");
mapweb.set("DWS", "Desarollo Web en Entorno Servidor");
mapweb.set("DAW", "Despliegue de aplicaciones web");
mapweb.set("DIW", "Diseño de interfaces web");

console.log("La cantidad total de módulos son: " + mapweb.size);

const iteratorMap = mapweb[Symbol.iterator](); //sacar iterator del mapa

for (const [key, value] of mapweb) {
  console.log(` La abrebiatura es ${key} y su nombre completo es ${value}`);
}

console.log("Abreviaturas:");

for (const [key, value] of mapweb) {
  console.log(`${key} `);
}

console.log("Los nombres de los módulos son:");

for (const [key, value] of mapweb) {
  console.log(`${value} `);
}


console.log("¿Está el módulo DAW entre los módulos de 2 de DAW → " + mapweb.has("DEC") );
console.log("¿Está el módulo GBD entre los módulos de 2 de DAW → " + mapweb.has("GBD") );

for (const [key, value] of mapweb) {
     if (`${key}` === "DAW") {
     mapweb.delete("DAW");
     }

    console.log(` La clave → ${key} y su valor → ${value}`);
  }
