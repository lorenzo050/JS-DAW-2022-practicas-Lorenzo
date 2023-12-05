//enumeracion
//numerico
enum Dias{
    Lunes, //0
    Martes, //1
    Miercoles, //2
    Jueves, //3
    Viernes, //4
    Sabado, //5
    Domingo, //6
}

console.log(Dias.Lunes);
console.log(Dias.Martes);
console.log(Dias.Miercoles);

//numerico desde otro inicio
enum Dias2{
    Lunes =10, 
    Martes,
    Miercoles, 
    Jueves, 
    Viernes, 
    Sabado, 
    Domingo, 
}

console.log(Dias2.Lunes);
console.log(Dias2.Martes);
console.log(Dias2.Miercoles);

//cadena de texto
enum Dias3 {
    Lunes="Lunes",
    Martes="Martes",
    Miercoles="Miercoles",
    Jueves="Jueves",
    Viernes="Viernes",
    Sabado="Sabado",
    Domingo="Domingo",
  }
  
console.log(Dias3.Lunes);
console.log(Dias3.Martes);
console.log(Dias3.Miercoles);

//tipo de dato
enum Dias4 {
    Lunes="Lunes",
    Martes="Martes",
    Miercoles="Miercoles",
    Jueves="Jueves",
    Viernes="Viernes",
    Sabado="Sabado",
    Domingo="Domingo",
  }
  
  function imprimirSaludo(mensaje:string, dia:Dias4):void {
    console.log(`${mensaje}, hoy es ${dia}. Feliz 2024!`);
  }
  
  console.log(imprimirSaludo("Hola mundo",Dias4.Jueves))