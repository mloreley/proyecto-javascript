//--------------0-----------1------2--3-----4----===============5====================----------6-------
let lista = ["texto 1", "texto 2", 6, 98, false, {nombre: "Maria", apellido: "Perez"}, ["flor","arbol"]];
//-----------------------------------------------------------------------------------------0------1---

// console.log(lista);
// // console.log(lista[1]);
// // console.log(lista[5].nombre);
// // console.log(lista[6][0]);

// for(let i=0; i < lista.length; i++ ) {
//     console.log(lista[i]);
// }

// const listaSuper = ["manzana", "agua", "huevos", "leche", "jabon"];
// console.log(listaSuper);

// //agregar elementos al array
// //PUSH - agregar elementos al final del array
// listaSuper.push("pan");
// console.log(listaSuper);

// // UNSHIFT - agrega elementos al principio del array
// listaSuper.unshift("mayonesa");
// console.log(listaSuper);


// //quitar elementos - 3 metodos
// //SHIFT - quitar siempre el primer elemento 
// listaSuper.shift();
// console.log(listaSuper);

// //POP - borra el ultimo elemento
// listaSuper.pop();
// console.log(listaSuper);

// //SPLICE - es el quita en un lugar particular (posicion para empezar, cantidad de elementos a borrar)
// listaSuper.splice(2,2);
// console.log(listaSuper);

// // let nombre = prompt("cual es tu nombre?");
// // listaSuper.push(nombre);
// // console.log(listaSuper);

// // JOIN - genera un string con los elementos del array
// let listaString = listaSuper.join(" - ");
// // alert(listaString);

// // CONCAT - concatenar arrays

// const ferreteria = ["martillo", "clavos"];
// const listaEntera = listaSuper.concat(ferreteria);
// console.log(listaEntera);

// //SLICE - cortar arrays 
// const listaCorta = listaEntera.slice(2, 4);
// console.log(listaCorta);


// //INDEXOF - me va a decir en que posicion esta el elemento que busco
// console.log(listaSuper);
// console.log(listaSuper.indexOf("jabon"));
// console.log(listaSuper.indexOf("aceite"));

// if (listaSuper.indexOf("aceite") == -1) {
//     listaSuper.push("aceite");
// }
// console.log(listaSuper);

// //INCLUDES - se fija si el elemento esta incluuido en el array - el resultado va ser true o false
// console.log(listaSuper.includes("agua"));
// console.log(listaSuper.includes("naranja"));

// const eliminarElemento = (item)=> {
//     let indice = listaSuper.indexOf(item);

//     if(indice != -1) {
//         listaSuper.splice(indice, 1);
//     }
// }

// eliminarElemento("manzana");
// console.log(listaSuper);


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const listaProductos = [
    {nombre: 'cinta', precio: 25},
    {nombre: 'calculadora', precio: 100}
];

const agregarProd = () => {
    let nombre = prompt("Cual es el producto?");
    let precio = parseFloat(prompt("Que precio tiene?"));

    let productoNuevo = new Producto(nombre, precio);

    listaProductos.push(productoNuevo);
    return listaProductos;
}

// while (listaProductos.length < 3) {
//     agregarProd();
// }
for (let i = 0; i < listaProductos.length; i++) {
    console.log(`el producto es ${listaProductos[i].nombre} y su precio es $${listaProductos[i].precio}`)
}
for (const producto of listaProductos) {
    console.log(`el producto es ${producto.nombre} y su precio es $${producto.precio}`)
}