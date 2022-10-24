// let mensaje = "Bienvenidos a la clase";

// console.log(mensaje);

// // localStorage - getItem, setItem(clave-key, valor)

// localStorage.setItem("saludo", mensaje);


// let saludo = localStorage.getItem("saludo");

// console.log(saludo);

//sessionStorage - se guarda mientras la sesion este abierta

// sessionStorage.setItem("temporal", "este es un mensaje temporal");
    // let boton = document.getElementById("btn");

    // boton.addEventListener("click", (e)=> {
    //     let nombre = document.getElementById("nombre").value;
    //     e.preventDefault();
    //     localStorage.setItem("nombre", nombre);
    // })


// removeItem, clear

// localStorage.removeItem("saludo");

// localStorage.clear();

// for(let i=0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     let valor = localStorage.getItem(clave)

//     console.log(`la clave es ${clave} y el valor es ${valor}`)
// }

// let edad = 30;

// localStorage.setItem("edad",edad);

// let edadNueva = localStorage.getItem("edad") + 1;
// console.log(edadNueva)


// let producto = [
//     {
//         nombre: "auto",
//         precio: 100000
//     },
//     {
//         nombre: "moto",
//         precio: 50000
//     },
// ]

// localStorage.setItem("producto", JSON.stringify(producto));

// formato de texto plano - JSON - javascript object notation

//para convertir en json - stringify
 

class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }
}

const listaMascotas = JSON.parse(localStorage.getItem("mascotas")) || [];


const nuevaMascota = () => {
    let nombre = prompt("que nombre tiene la mascota?");
    let tipo = prompt("que tipo de mascota es?");
    let edad = parseInt(prompt("que edad tiene?"));

    let mascotaNueva = new Mascota(nombre, tipo, edad);
    listaMascotas.push(mascotaNueva);
    localStorage.setItem("mascotas", JSON.stringify(listaMascotas));

    // if(localStorage.getItem("mascotas") == null) {
    //     listaMascotas.push(mascotaNueva);
    //     localStorage.setItem("mascotas", JSON.stringify(listaMascotas));
    // } else {
    //     const listaStorage = JSON.parse(localStorage.getItem("mascotas"));
    //     listaStorage.push(mascotaNueva);
    //     localStorage.setItem("mascotas", JSON.stringify(listaStorage));
    // }


    //return listaMascotas;
}