/*
1 - crear una clase con un constructor de productos, que acepte: nombre, categoria, precio y stock
2 - crear un metodo que aplique el 10% de descuento si el precio es mayor a 1000
3 - crear un metodo que se llame comprar y que acepte como parametro la cantidad
este metodo va a revisar si hay suficiente stock para comprar y si lo hay modifica modifica el stock.
*/

class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;                
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