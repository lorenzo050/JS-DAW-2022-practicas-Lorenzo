//enumeracion
//numerico
var Dias;
(function (Dias) {
    Dias[Dias["Lunes"] = 0] = "Lunes";
    Dias[Dias["Martes"] = 1] = "Martes";
    Dias[Dias["Miercoles"] = 2] = "Miercoles";
    Dias[Dias["Jueves"] = 3] = "Jueves";
    Dias[Dias["Viernes"] = 4] = "Viernes";
    Dias[Dias["Sabado"] = 5] = "Sabado";
    Dias[Dias["Domingo"] = 6] = "Domingo";
})(Dias || (Dias = {}));
console.log(Dias.Lunes);
console.log(Dias.Martes);
console.log(Dias.Miercoles);
//numerico desde otro inicio
var Dias2;
(function (Dias2) {
    Dias2[Dias2["Lunes"] = 10] = "Lunes";
    Dias2[Dias2["Martes"] = 11] = "Martes";
    Dias2[Dias2["Miercoles"] = 12] = "Miercoles";
    Dias2[Dias2["Jueves"] = 13] = "Jueves";
    Dias2[Dias2["Viernes"] = 14] = "Viernes";
    Dias2[Dias2["Sabado"] = 15] = "Sabado";
    Dias2[Dias2["Domingo"] = 16] = "Domingo";
})(Dias2 || (Dias2 = {}));
console.log(Dias2.Lunes);
console.log(Dias2.Martes);
console.log(Dias2.Miercoles);
//cadena de texto
var Dias3;
(function (Dias3) {
    Dias3["Lunes"] = "Lunes";
    Dias3["Martes"] = "Martes";
    Dias3["Miercoles"] = "Miercoles";
    Dias3["Jueves"] = "Jueves";
    Dias3["Viernes"] = "Viernes";
    Dias3["Sabado"] = "Sabado";
    Dias3["Domingo"] = "Domingo";
})(Dias3 || (Dias3 = {}));
console.log(Dias3.Lunes);
console.log(Dias3.Martes);
console.log(Dias3.Miercoles);
//tipo de dato
var Dias4;
(function (Dias4) {
    Dias4["Lunes"] = "Lunes";
    Dias4["Martes"] = "Martes";
    Dias4["Miercoles"] = "Miercoles";
    Dias4["Jueves"] = "Jueves";
    Dias4["Viernes"] = "Viernes";
    Dias4["Sabado"] = "Sabado";
    Dias4["Domingo"] = "Domingo";
})(Dias4 || (Dias4 = {}));
function imprimirSaludo(mensaje, dia) {
    console.log("".concat(mensaje, ", hoy es ").concat(dia, ". Feliz 2024!"));
}
console.log(imprimirSaludo("Hola mundo", Dias4.Jueves));
