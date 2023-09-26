class Alumno {
  constructor(nombre, email, contraseña) {
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
  }

  saludo() {
    console.log("Hola, soy " + this.nombre);
  }

  login(email, contraseña) {
    if (email === this.email) {
      console.log(contraseña === this.contraseña);
    } else {
      console.log(email === this.email);
    }
  }
}

class AlumnoASIR extends Alumno {
    constructor(nombre, email, contraseña){
        super(nombre, email, contraseña);
        this.cursos = [];
        this.activo = false;
    }
    
    añadirCursos(curso){
        this.cursos.push(curso);
        console.log(this.cursos);
    }

}

class AlumnoDAW extends AlumnoASIR{
    constructor(nombre, email, contraseña){
        super(nombre, email, contraseña);
        this.cursos = [];
        this.activo = false;
    }
}

var alu = new AlumnoASIR("lorenzo", "loren@mail.com", "1234");

alu.saludo();

alu.login("loren@mail.com", "1234");
alu.login("loren@mail.com", "12345");

alu.añadirCursos("Desarrollo");
alu.añadirCursos("Programacion");


var aluDAW = new AlumnoASIR("pepe", "loren@mail.com", "1234");

aluDAW.saludo();

aluDAW.login("loren@mail.com", "1234");
aluDAW.login("loren@mail.com", "12345");

aluDAW.añadirCursos("Desarrollo");
aluDAW.añadirCursos("Programacion");