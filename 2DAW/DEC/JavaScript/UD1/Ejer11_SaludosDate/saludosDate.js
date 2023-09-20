//Crea una función llamada saludar para que dependiendo de la hora que sea te indique las buenas noches,
// buenas tardes o buenos días. Inventaros el rango horario.
// Por ejemplo: si son las 9:00 que te diga buenos días.

function saludar() {
  var d = new Date();
 // d.setHours(hora);
 // console.log(d.getHours());
  horadate = d.getHours();

  if (horadate >= 8 && horadate <= 14) {
    console.log("Buenos días");
  }

  if (horadate > 14 && horadate <= 21) {
    console.log("Buenas tardes");
  }

  if (horadate<8 || horadate>21) {
    console.log("Buenas noches");
  }
}

console.log(saludar());
