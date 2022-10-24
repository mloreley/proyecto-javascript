// let saludo = localStorage.getItem("saludo");

// let nombre = localStorage.getItem("nombre");

// document.querySelector("h1").innerHTML = `Bienvenido, ${nombre}`  
// let productos = JSON.parse(localStorage.getItem("producto"))
// console.log(productos)

// console.log(productos[0].precio)

let listaMascotas = JSON.parse(localStorage.getItem("mascotas"));

let contenedor = document.getElementById("contenedor");

if (listaMascotas == null ) {
    contenedor.innerHTML = "No hay actualmente mascotas"
} else {
    listaMascotas.forEach(mascota => {
        contenedor.innerHTML += `
            <h2>${mascota.nombre}</h2>
            <h3>${mascota.tipo}</h3>
            <p>Edad: ${mascota.edad}</p>
        `
    })
} 

const buscarMascota = (nombre) => {
    const resultado = listaMascotas.filter(mascota => mascota.nombre == nombre)
    return resultado
}