// const personas = [
//     {nombre: "juan", apellido: "perez", casado: false},
//     {nombre: "maria", apellido: "pepito", casado: true},
//     {nombre: "damian", apellido: "fulanito", casado: true}

// ]

const parrafo = document.querySelector("#parrafo");

// personas.forEach(persona => {
//     parrafo.innerHTML += `
//         <div>
//             <h3>${persona.nombre} ${persona.apellido}</h3>
//             <p>${persona.casado ? "casado" : "soltero"}</p>
//         </div>
//     `
// })

// FALSY ||
/*
""
0
null
undefined
NaN
false

*/

//NULIISH ??
/*
    null
    undefined
*/

const usuario = null;
const carrito = document.querySelector("#carrito");

console.log(usuario?.nombre || "el usuario no existe")

let nodo = carrito?.innerHTML || "el carrito esta vacio";

console.log(nodo)

const mascota = {
    nombre_mascota_td: "lucky",
    edad: 3,
    duenio: {
        nombre: "juan",
        telefono: 111111
    },
    genero: "masculino"
}

//let nombre = mascota.nombre;

let {nombre_mascota_td: nombre, edad, duenio:{telefono}, genero="desconocido"} = mascota;

console.log(nombre)


const imprimirDatos = ({nombre, edad}) => {
    parrafo.innerHTML += `
        <h3>${nombre}</h3>
        <p>Edad: ${edad}</p>
    `

}

const mascotas = [
    {nombre: "lucky", edad: 3},
    {nombre: "simba", edad: 6},
    {nombre: "darwin", edad: 5},
    {nombre: "daisy", edad: 3}
]

mascotas.forEach(mascota => {
    imprimirDatos(mascota)
})

window.addEventListener('click', ({x, y}) => {
    console.log(x, y)
})


const colores = ["azul", "verde", "marron", "violeta"];

console.log(colores)
console.log(...colores)

const notas = [8,5,4,6,7,9,1];

//Math.max(8,5,4,6,7,9,1)
console.log(Math.max(...notas))