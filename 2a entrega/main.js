const arrayFiesta = []
const arrayMenu = []

// arrayFiesta = [cantidad de personas, arrayMenu, importe total en comida]
// arrayMenu = [objComida1, objComida2,...]

//---- LISTAS -----

const listaComida = [
    { nombre: "empanadas", porcion: 2, precio: 85},
    { nombre: "pizza", porcion: 2, precio: 100},
    { nombre: "brusquetas", porcion: 3, precio: 200},
    { nombre: "sandwiches", porcion:3, precio: 150},
];

//---- OBJETOS ------

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
            let com = new objComida(buscaPlato.nombre,porciones,costoPlato);
            console.log(com);
            return com;
        }
    }
}
    
const crearFiesta = ()=> {
    let cantidad = parseInt(prompt("Ingrese la cantidad de comensales de la fiesta"));

    arrayFiesta.push(cantidad);
    console.log(`la cantidad de personas es de ${arrayFiesta[0]}`);
    let en = prompt("Ingrese un plato de entrada");
    do{
        comida1 = new objPlato(en);
        arrayMenu.push(comida1.agregarComida(en));
        en = prompt("Ingrese un plato de entrada o ESC para salir");
    } while ((en != "ESC") && (en != "esc")) 
    arrayFiesta.push(arrayMenu);
    total = 0;
    for (const costo in arrayFiesta[1]) {//recorrer el arreglo para sumar los costos de los platos
        total = total + arrayFiesta[1][costo].costo;
        console.log(`costo de ${arrayFiesta[1][costo].plato} es $${arrayFiesta[1][costo].costo}`);
    }
    arrayFiesta.push(total); // total en comida
    console.log(`costo total de la comida de la fiesta es $${arrayFiesta[arrayFiesta.length-1]}`);
}
crearFiesta();