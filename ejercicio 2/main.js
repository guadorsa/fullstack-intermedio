class Persona(){
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
}
let persona1 = new Persona("Juan", 30);
console.log(Persona.nombre);
console.log(Persona.edad);