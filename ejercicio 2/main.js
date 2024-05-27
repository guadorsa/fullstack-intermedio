class Persona{
    constructor(nombre, apellido, edad, sexo, peso, altura){
        this.nombre= nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.identificacion = 123456;
    }

    obtenerIdentificacion = function(x,y){
        return = x*y;
    }

    getIdentificacion(){
        return this.identificacion;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    getEdad(){
        return this.edad;
    }

    setEdad(nuevoEdad){
        this.edad = nuevoEdad;
    }  

    Saludar(){
        console.log(`hola soy ${this.nombre} y tengo ${this.edad} años`);
        }
}
class Estudiante extends Persona{
    constructor(nombre, apellido, edad, carrera){
        super(nombre, apellido, edad);
        this.carrera=carrera;
    }
    Saludar(){
        console.log(`hola soy ${this.nombre}  ${this.apellido} tengo ${this.edad} años y estudio ${this.carrera}`);
        }
}

let persona1 = new Persona("Juan","ortiz", 30, "m", 45, 170);
persona1.Saludar();
persona1.getEdad;
persona1.setEdad(30);
persona1.getNombre;
persona1.setNombre;
console.log(persona1.nombre);
console.log(persona1.edad);

const estudiante1=new Estudiante("juan","ortiz", 34, "sistemas");
console.log(estudiante1.nombre);
console.log(estudiante1.carrera);
estudiante1.Saludar();
console.log (persona1._identificacion)

