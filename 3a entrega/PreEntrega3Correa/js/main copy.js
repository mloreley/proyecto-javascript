const arrayFiesta = [] // arrayFiesta = [cantidad de personas, arrayMenu, importe total en comida]
const arrayMenu = [] // arrayMenu = [objComida1, objComida2,...]
let cantidad = 0;
// ------ ELEMENTOS del DOM ----

const boton = document.getElementById("btn");
const formularioPizza = document.getElementById("formularioPizza");
const formularioEmpanadas = document.getElementById("formularioEmpanadas");
const formularioBrusquetas = document.getElementById("formularioBrusquetas");
const formularioSandwiches = document.getElementById("formularioSandwiches");
const formularioAgua = document.getElementById("formularioAgua");
const formulario7up = document.getElementById("formulario7up");
const formularioPepsi = document.getElementById("formularioPepsi");
let pizzas = false;
let empanadas = false;
let brusquetas = false;
let sandwiches = false;
let agua = false;
let seven = false;
let pepsi = false;


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

// ----- EVENTOS DEL DOM --------

formularioPizza.addEventListener("click", function() {
    pizzas = true;
});
formularioEmpanadas.addEventListener("click",function(){
    empanadas = true;
});
formularioBrusquetas.addEventListener("click",function(){
    brusquetas = true;
});
formularioSandwiches.addEventListener("click",function(){
    sandwiches = true;
});
formularioAgua.addEventListener("click",function(){
    agua = true;
});
formulario7up.addEventListener("click",function(){
    seven = true;
});

formularioPepsi.addEventListener("click",function(){
    pepsi = true;
});

function pushComida(com){
    comida1 = new objPlato(com);
    arrayMenu.push(comida1.agregarComida(com));
    arrayFiesta.push(arrayMenu);
    return true;
}

const mostrar = () =>{
    cantidad = document.getElementById("formularioCantidad").value;
    if (cantidad < 1){
        alert("Debe ingresar una cantidad valida de personas");
        return;
    }
    else{
        arrayFiesta.push(cantidad);
    }
    console.log(`pizzas ${pizzas}`);  
    console.log(`empanadas ${empanadas}`);
    console.log(`brusquetas ${brusquetas}`);
    console.log(`sandwiches ${sandwiches}`);  
    if ((!pizzas && !empanadas) && (!brusquetas && !sandwiches)){        
        alert("Debe seleccionar al menos una comida");
        return;     
    }
    else{
        if (pizzas){
            pushComida('pizza');
        }
        if (empanadas){
            pushComida('empanadas');        
        }
        if (brusquetas){
            pushComida('brusquetas');
        }
        if (sandwiches){
            pushComida('sandwiches');
        }
    }
    // if (!agua && !seven && !pepsi){        
    //     alert("Debe seleccionar al menos una bebida");
    //     return;
    // }
    console.log(cantidad);
    let total = 0;
    for (const costo in arrayFiesta[1]) {//recorrer el arreglo de la comida para sumar los costos de los platos
        total = total + arrayFiesta[1][costo].costo;
        console.log(`costo de ${arrayFiesta[1][costo].plato} es $${arrayFiesta[1][costo].costo}`);
        }
    arrayFiesta.push(total); // total en comida
    console.log(`costo total de la comida de la fiesta es $${arrayFiesta[arrayFiesta.length-1]}`);
}
boton.addEventListener("click", mostrar);
boton.onclick = (e) => {
    e.preventDefault();
}

const crearFiesta = () => {
    arrayFiesta.push(cantidad);

}



// const crearFiesta = ()=> {
//     let cantidad = parseInt(prompt("Ingrese la cantidad de comensales de la fiesta"));

//     arrayFiesta.push(cantidad);
//     console.log(`la cantidad de personas es de ${arrayFiesta[0]}`);
//     let en = prompt("Ingrese un plato de entrada").toLowerCase();
//     do{
//         comida1 = new objPlato(en);
//         arrayMenu.push(comida1.agregarComida(en));
//         en = prompt("Ingrese un plato de entrada o ESC para salir").toLowerCase();
//     } while ((en != "ESC") && (en != "esc")) 
//     arrayFiesta.push(arrayMenu);
//     total = 0;
//     for (const costo in arrayFiesta[1]) {//recorrer el arreglo de la comida para sumar los costos de los platos
//         total = total + arrayFiesta[1][costo].costo;
//         console.log(`costo de ${arrayFiesta[1][costo].plato} es $${arrayFiesta[1][costo].costo}`);
//     }
//     arrayFiesta.push(total); // total en comida
//     console.log(`costo total de la comida de la fiesta es $${arrayFiesta[arrayFiesta.length-1]}`);
// }
// crearFiesta();