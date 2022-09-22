/*
1 - crear una clase con un constructor de productos, que acepte: nombre, categoria, precio y stock
2 - crear un metodo que aplique el 10% de descuento si el precio es mayor a 1000
3 - crear un metodo que se llame comprar y que acepte como parametro la cantidad
este metodo va a revisar si hay suficiente stock para comprar y si lo hay modifica modifica el stock.
*/
/* 
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
}*/
class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;                
    } // los metodos se definen afuera del constructor
    descontar = () => { // aca debo descontar el 10% si el precio es mayor a 1000
        this.puntos += puntosNuevos;
    };
    comprar = (cantidad) =>{
        if (this.stock >= cantidad){
            this.stock -= cantidad;
            console.log(this);
        }
        else{
            console.log(this);
        }
    }
}

const televisor = new Producto("Phillips", "led", 5000, 10);
const parlantes = new Producto("Owen", "portatil", 800, 5);

/*const crearMascota = ()=> {
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
*/
televisor.comprar(1);
televisor.comprar(4);