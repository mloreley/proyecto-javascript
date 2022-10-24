//funcion que retorna funcion

// function nombreFuncion() {
//     return otraFuncion
// }

// function mayorQue(num) {
//     return (num2) => num2 > num;
// }

// const mayorQueDiez = mayorQue(10);
// const mayorQueCinco = mayorQue(5);

// console.log(mayorQueDiez(14)); // si 14 > 10

// function operacionCalculadora(operacion) {
//     switch(operacion) {
//         case '+':
//             return (num1, num2)=>num1 + num2;
//         case '-':
//             return (num1, num2)=>num1 - num2;
//         case '*':
//             return (num1, num2)=>num1 * num2;
//         case '/':
//             return (num1, num2)=>num1 / num2;
//         default:
//             alert("operacion no valida");
//             break;
//         }
// }
// const suma = operacionCalculadora("+");

// suma(3,4); //7

 
// funciones que aceptan funciones como parametros
//function nombreUtil(funcion) {}

// function porCadaElemento(array, funcion) {
//     for(const elemento of array){
//         funcion(elemento);
//     }
// }

// const numeros = [1, 8 ,45, 200];

// porCadaElemento(numeros, console.log);

// let total = 0;
// function acumular(num) {
//     total += num;
//     console.log(total);
// }

// porCadaElemento(numeros,acumular);

// const arrayDuplicados = [];

// porCadaElemento(numeros, (elemento)=>{
//     arrayDuplicados.push(elemento*2);
// })

// console.log(arrayDuplicados);

const listaProductos = [
    { nombre: "televisor", precio: 5200},
    { nombre: "computadora", precio: 7500},
    { nombre: "telefono", precio: 4000},
    { nombre: "estufa", precio: 2000},
    { nombre: "tostadora", precio: 1500},
    { nombre: "ventilador", precio: 3400},
];

//FOREACH - 
listaProductos.forEach((producto)=> {
    console.log(`este producto es ${producto.nombre} y su precio es $${producto.precio}`)
})

//FIND - solo trae el primero que encuentra
// let elementoAbuscar = prompt("que queres buscar?").toLowerCase();
// let buscar = listaProductos.find(elemento => elemento.nombre == elementoAbuscar );

// console.log(buscar);

//FILTER - trae todos los que encuentra
let buscarPorPrecio = listaProductos.filter(producto => producto.precio > 3000);

console.log(buscarPorPrecio)

//SOME 
console.log(listaProductos.some(prod => prod.precio < 1000))

//MAP - crea otro array con alguna transformacion
let listaNueva = listaProductos.map(producto => producto.precio = producto.precio * 1.07);

console.log(listaNueva)

//REDUCE - resumir el array a un valor - acepta 2 parametros

const totalCarrito = listaProductos.reduce((acumulador, producto)=> {
   return acumulador + producto.precio;
}, 0);
console.log(totalCarrito);

//SORT - ordenar nuestro array - METODO DESTRUCTIVO!    

let arrayString = ["pelota", "raqueta", "zapatillas", "arbol"];
console.log(arrayString)
arrayString.sort();
console.log(arrayString)

let arrayNumeros = [40 , 1, 5, 20];
console.log(arrayNumeros)
arrayNumeros.sort((a,b)=> b - a);
console.log(arrayNumeros)


listaProductos.sort((a,b)=> {
    if(a.nombre > b.nombre) {
        return 1
    }
    if(a.nombre < b.nombre) {
        return -1
    }
    return 0;

})
console.log(listaProductos)
