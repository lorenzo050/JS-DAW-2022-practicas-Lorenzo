class AlumnoDAWw {
  constructor(nombre, apellido, email, edad) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.email = email),
      (this.edad = edad);
  }

  //get

  get getnombre() {
    return this.nombre;
  }

  get getapellido() {
    return this.apellido;
  }

  get getemail() {
    return this.email;
  }

  get getedad() {
    return this.edad;
  }

  //set

  set setnombre(nombre) {
    this.nombre = nombre;
  }

  set setapellido(apellido) {
    this.apellido = apellido;
  }

  set setemail(email) {
    this.email = email;
  }

  set setemail(email) {
    this.email = email;
  }
}

var alu = new AlumnoDAWw("lorenzo", "nava", "loren@mail.com", "20");

console.log(alu.getnombre);

alu.setnombre = "lorenzo2";

console.log(alu.getnombre);
