const arrayFiesta = []
const arrayMenu = []


//---- LISTAS -----

const listaComida = [
    { nombre: "empanadas", porcion: 2, precio: 85},
    { nombre: "pizza", porcion: 2, precio: 100},
    { nombre: "brusquetas", porcion: 3, precio: 200},
    { nombre: "sandwiches", porcion:3, precio: 150},
];

const listaJuegos = [
    { nombre: "pelotero", precio: 2000, stock: 10},
    { nombre: "metegol", precio: 1500, stock: 15},
    { nombre: "hamaca", precio: 2500, stock: 10 },
    { nombre: "tejo", precio: 2000, stock: 10},  
];

//---- OBJETOS ------

// class objComida{
//     constructor(plato,cantidad,importe){
//          this.plato = plato;
//          this.cantidad = cantidad;
//          this.importe = importe;
//      }    
//  }

//  class objJuegos{
//     constructor(juego,cantidad,importe){
//          this.juego = juego;
//          this.cantidad = cantidad;
//          this.importe = importe;
//      }    
//  }


class objComida{
     constructor(plato,porciones,costo){
         this.plato = plato;        
         this.porciones = porciones;
         this.costo = costo;
     }
    }

class objPlato{
    constructor(plato) {
        this.plato = plato;
    }
    agregarComida = (plato) =>{        
        const buscaPlato = listaComida.find(argPlato => argPlato.nombre == plato );
        if (buscaPlato) {
            let porciones = arrayFiesta[0] * buscaPlato.porcion;
            let costoPlato = arrayFiesta[0] * buscaPlato.precio;
            let com = new objComida(buscaPlato,porciones,costoPlato);
            console.log(com);
            return com;
        }
    }
}
    
    // agregarJuego = (juego) =>{
    //     const buscaJuego = listaJuegos.find(argJuego => argJuego.nombre == juego);
    //     if (buscaJuego){
    //         if (buscaJuego.stock >= 1) {
    //             buscaJuego.stock --;

    //         }
    //     }
    // }


// class entretenimiento{
//     constructor(nombre,precio,cantidad){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
// }

const crearFiesta = ()=> {
    let cantidad = parseInt(prompt("Ingrese la cantidad de comensales de la fiesta"));

    arrayFiesta.push(cantidad);

    let en = prompt("Ingrese un plato de entrada");
    do{
        comida1 = new objPlato(en);
        arrayMenu.push(comida1.agregarComida(en));
        en = prompt("Ingrese un plato de entrada o ESC para salir");
    } while ((en != "ESC") && (en != "esc"))  
    console.log(arrayFiesta);
    total = 0;
    for (const costo in arrayMenu) {//recorrer el arreglo para sumar los costos de los platos
        total = total + arrayMenu[costo].costo;
        console.log(`costo de ${arrayMenu[costo].plato.nombre} es $${arrayMenu[costo].costo}`);
    }
    arrayFiesta.push(total); // total en comida
    console.log(`costo de la comida de la fiesta es $${arrayFiesta[arrayFiesta.length-1]}`);
}
crearFiesta();
