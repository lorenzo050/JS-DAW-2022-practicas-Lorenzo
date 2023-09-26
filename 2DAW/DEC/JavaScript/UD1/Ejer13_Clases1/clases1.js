class AlumnoComplejo{
       
    constructor (matricula,NIA,nombre,apellidos,curso,modulo){
        this.matricula = matricula;
        this.NIA = NIA;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
        this.modulo = modulo;
    } 

      iniciar(){
       
     // console.log(this.matricula);
      return new AlumnoComplejo("AB1234567",1234567,"lorenzo","navarro",2,'DAW');
    }

    mostrarDatos(){
        console.log("**********Datos alumnos del Complejo de Cheste**********");
        console.log("Matrícula: " + this.matricula + "\n" + "NIA: " + this.NIA + "\n" 
        + "Curso: " + this.curso + "\n" + "Modulo: " + this.modulo);
       
    }

}

var alu = new AlumnoComplejo();

alu = alu.iniciar();

alu.mostrarDatos();