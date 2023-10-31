//Identifica al elemento donde se va a insertar el html
const form = document.getElementById('form');

//Crea un fragmento HTML vacio, así se irá insertando cada bloque nuevo de 
// html aquí, y luego de una se insertará todo en box.
const fragment = document.createDocumentFragment();

// Creación y clonación de los párrafos
const parrafo1 = document.createElement('label');
parrafo1.textContent = 'Nombre:';
fragment.appendChild(parrafo1);


//Creación del input

const input = document.createElement('input');
input.type = 'text';
input.setAttribute("id" , "nombre");

fragment.appendChild(input);

const parrafo2 = document.createElement('label');
parrafo2.textContent = ' Apellido:';
fragment.appendChild(parrafo2);


const input2 = document.createElement('input');
input2.type = 'text';
input2.setAttribute("id" , "apellido");

fragment.appendChild(input2);

const btnEnviar = document.createElement('button');
btnEnviar.setAttribute("onclick", "return datosNombre()");
btnEnviar.textContent = ' Enviar datos';
fragment.appendChild(btnEnviar);

const ptexto = document.createElement('p');
ptexto.setAttribute("id", "añadirTexto");
fragment.appendChild(ptexto);

//Inyección de todo el codigo en el formulario
form.appendChild(fragment);

function datosNombre() {
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    document.getElementById("añadirTexto").innerHTML = "Hola buenos días " + nombre + " " + apellido + " ,gracias por rellenar el formulario" ;
    return false;
   // alert(nombre);
}
