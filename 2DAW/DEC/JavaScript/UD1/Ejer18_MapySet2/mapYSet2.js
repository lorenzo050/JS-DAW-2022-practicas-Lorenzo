//mapa asignaturas
const mapAsignatura = new Map();
mapAsignatura.set("DEC", "120");
mapAsignatura.set("DWS", "140");
mapAsignatura.set("DAW", "160");
mapAsignatura.set("DIW", "180");

//arrays alumnos
arrayAluDEC = new Array();
arrayAluDEC.push("Lorenzo","David","Pablo");
console.log(arrayAluDEC)
arrayAluDWS = new Array();
arrayAluDWS.push("Lorenzo","David","Pablo");
arrayAluDAW = new Array();
arrayAluDAW.push("Lorenzo","David","Pablo");
arrayAluDIW = new Array();
arrayAluDIW.push("Lorenzo","David","Pablo");

//mapa alumnos
const mapAlumno = new Map();
mapAlumno.set("DEC",arrayAluDEC);
mapAlumno.set("DWS",arrayAluDWS);
mapAlumno.set("DAW",arrayAluDAW);
mapAlumno.set("DIW",arrayAluDIW);

//imprimir datos
for (const [key, value] of mapAsignatura) {
    console.log(`La asignatura ${key} tiene una duración de ${value}  horas \n
    y tiene los alumnos ` + mapAlumno.get(`${key}.`));
  
}