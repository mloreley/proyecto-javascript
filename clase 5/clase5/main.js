//objeto literal
// let nombreObjeto = { propiedad: valor, propiedad1:valor1    }

const mascota1 = {
    nombre: "Lucky",
    tipo: "perro",
    edad: 2,
    duenio: "Juan",
    castrado: false,
    genero: "masculino"
}

console.log(mascota1);

// 2 maneras de acceder a las propiedades

console.log(mascota1.castrado);
// console.log(mascota1.duenio.telefono)

console.log(mascota1["tipo"]);

mascota1.castrado = true;

console.log(mascota1.castrado);
mascota1.duenio = "Maria";
console.log(mascota1.duenio);

class Mascota {
    constructor(pepito, tipo, edad, duenio, castrado, genero) {
        this.nombre = pepito;
        this.tipo = tipo;
        this.edad = edad;
        this.duenio = duenio;
        this.castrado = castrado;
        this.genero = genero;
        this.puntos = 100;
    }
    agregarPuntos(puntosNuevos) {
        this.puntos += puntosNuevos;
    };

}

const daisy = new Mascota("Daisy", "perro", 3, "Yael", true, "femenino");
const darwin = new Mascota("Darwin", "gato", 5, "Yael", true, "masculino");

console.log(daisy);

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

//crearMascota();
darwin.agregarPuntos(20);

let texto = "HOLA, que tal";

console.log(texto.toLocaleLowerCase())


const simba = new Mascota("Simba", "gato", 6, "Yael", true, "masculino");

for (const prop in simba) {
    console.log(`la propiedad es ${prop} y su valor es ${simba.prop}`)

}


/*
1 - crear una clase con un constructor de productos, que acepte: nombre, categoria, precio y stock
2 - crear un metodo que aplique el 10% de descuento si el precio es mayor a 1000
3 - crear un metodo que se llame comprar y que acepte como parametro la cantidad
este metodo va a revisar si hay suficiente stock para comprar y si lo hay modifica modifica el stock.

*/
