class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    saludar(){
        console.log(("hola soy"); $(this.nombre); ('y tengo'); $(this.edad); ('años'));
        }
}
let persona1 = new Persona("Juan", 30);
persona1.saludar();
console.log(persona1.nombre);
console.log(persona1.edad);
