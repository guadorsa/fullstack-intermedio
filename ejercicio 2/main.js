class Persona{
    constructor(nombre, apellido, edad, sexo, peso, altura){
        this.nombre= nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.identificacion = 123456; /*  variable privada*/
    }

    /* funcion privada Interna  */
    obtenerIMC = function(x,y){
        return x/(y*y);
    }

    getIdentificacion(){
        return this.identificacion;
    }

    /* llamo a la funcion externa, paso parametros por valor, mas no por referencia */
    desplegarIMC(){
        console.log(this.obtenerIMC(this.peso, this.altura)); /* llamo a la funcion externa */
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
persona1.desplegarIMC(); /* funcion externa */
let IMC = persona1.obtenerIMC(persona1.peso, persona1.altura); /* menos elaborada q anterior */
console.log(IMC);

//persona1.getEdad;
/*
persona1.setEdad(30);
persona1.getNombre;
persona1.setNombre;
console.log(persona1.nombre);
console.log(persona1.edad);

const estudiante1=new Estudiante("juan","ortiz", 34, "sistemas");
console.log(estudiante1.nombre);
console.log(estudiante1.carrera);
estudiante1.Saludar();
console.log (persona1.identificacion);
console.log (persona1.obtenerIdentificacion(5,5));
*/


