/*function Mascota(pepito, tipo, edad, duenio, castrado, genero) {
    this.nombre = pepito;
    this.tipo = tipo;
    this.edad = edad;
    this.duenio = duenio;
    this.castrado = castrado;
    this.genero = genero;
    this.puntos = 100;
    this.agregarPuntos = (puntosNuevos)=> {
        this.puntos += puntosNuevos;
    }
}*/
class Mascota {
    constructor(pepito, tipo, edad, duenio, castrado, genero) {
        this.nombre = pepito;
        this.tipo = tipo;
        this.edad = edad;
        this.duenio = duenio;
        this.castrado = castrado;
        this.genero = genero;
        this.puntos = 100;        
    } // los metodos se definen afuera del constructor
    agregarPuntos = (puntosNuevos) => {
        this.puntos += puntosNuevos;
    };
}
const daisy = new Mascota("Daisy","perro",3,"Yael",true,"femenino");
const darwin = new Mascota("Darwin","perro",6,"Yael",true,"maculino");

const crearMascota = ()=> {
    let nombreMascota = prompt("Como se llama la mascota?");
    let tipoMascota = prompt("Que tipo de mascota es?");
    let edadMascota = parseInt(prompt("Que edad tiene?"));
    let duenioMascota = prompt("Como te llamas?");
    let castradoMascota = prompt("esta castrado? pon si o no");
    let generoMascota = prompt("Que genero es?");

    let castradoBoolean = (castradoMascota == 'si');
    const mascota = new Mascota(nombreMascota,tipoMascota,edadMascota,duenioMascota,castradoBoolean,generoMascota);
    console.log(mascota);
    return mascota;
}
crearMascota();
daisy.agregarPuntos(3);
darwin.agregarPuntos(15);