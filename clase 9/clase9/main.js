const parrafo = document.querySelector("#parrafo");
const boton = document.getElementById("btn");
const texto = document.getElementById("texto");
console.log(boton)

const escribir = ()=>{
    let texto = prompt("que queres escribir?");
    parrafo.innerHTML = texto;
}

//como escuchamos eventos?
// 1 - metodo addEventListener(evento, funcion) // funcion de OS porque le estamos dando una funcion como parametro
//boton.addEventListener("click", escribir);

// boton.addEventListener("click", ()=>{
//     escribir();
// })

// 2 - forma reducida donde el evento es el metodo
// boton.onclick = ()=> { escribir()}

//2 TIPOS DE EVENTOS
// 1 - MECANICOS - relacionados con el mouse y con el teclado
//mouse - mouseover, mouseout, mousemove

// boton.addEventListener("mousemove", ()=> {
//     console.log("hola")
// })
 
//teclado - keydown, keyup ESTO ESTABA SIN COMENTAR
// texto.onkeyup = (e)=> {
//     parrafo.innerHTML = texto.value
//     console.log(e.keyCode);
// }


// 2 - LOGICA - change input
// texto.addEventListener("change", ()=>{
//     if (texto.value == '') {
//         texto.style.background = 'red';
//         //parrafo.innerHTML = texto.value;
//     } else {
//         parrafo.innerHTML = texto.value;
//     }
// })

const lista = document.getElementById("lista");

lista.onchange = () => {
    parrafo.innerHTML = `el elemento elegido es ${lista.value}`
} 


// texto.addEventListener("input", ()=>{
//     if (texto.value == '') {
//         texto.style.background = 'red';
//         //parrafo.innerHTML = texto.value;
//     } else {
//         parrafo.innerHTML = texto.value;
//     }
// })

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault();
    console.log(evento);
})

const link = document.getElementById("link");

link.onclick = (e) => {
    e.preventDefault();
    console.log(e);
}