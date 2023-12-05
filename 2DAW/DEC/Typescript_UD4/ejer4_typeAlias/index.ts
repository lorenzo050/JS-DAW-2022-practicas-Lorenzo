let id: number | string | boolean = 'paco';
console.log(id);
const arreglo: (number | string | boolean)[] = [1,2,3, "Hola mundo"];
console.log(arreglo);

//TIPO ALIAS
type tipoAlias = number | string | boolean;
const arreglo2: (tipoAlias)[] = [1,2,3, "Hola mundo 2"];
console.log(arreglo2);

//type hobbie
type hobbies = "1.Programar" | "2.videojuegos" | "3.Senderismo" | "4.Ordenadores";
function eshobbie(hob:hobbies){
    if (hob === "1.Programar") {
        return true;
    } else {
        return false;
    }
  }

  console.log(eshobbie("1.Programar"));