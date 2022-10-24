//ACCEDER AL DOM
// 1 - id - trae un objeto
let titulo = document.getElementById("titulo");
console.log(titulo);

// 2 - clase - va a traer un array de objetos
let parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos);

// 3 - por etiqueta - trae un array
let subtitulo = document.getElementsByTagName("h2");
console.log(subtitulo);

for(const parrafo of parrafos) {
    console.log(parrafo.innerHTML)
}

// 4 - por selector
console.log(document.querySelector("#titulo"))
console.log(document.querySelector(".parrafo"))
console.log(document.querySelectorAll("div > p"))

// modificar contenido
// innerText
titulo.innerText = "Este es el titulo cambiado por javascript";
titulo.innerHTML = "Este es un titulo con <a href='google.com'>link</a>";

titulo.style.color = "red";
// titulo.style.display = "none";

titulo.className = "titulo";
 
let div = document.querySelector("div");
div.setAttribute("class", "container");
console.log(titulo.getAttribute("id"));

let tituloContenedor = document.createElement("h2");
tituloContenedor.setAttribute("id", "nuevoElemento");
tituloContenedor.innerHTML = "Este es un titulo nuevo";
console.log(tituloContenedor);

let nuevoContenedor = document.getElementById("contenedor");
nuevoContenedor.append(tituloContenedor);
// 


let nombre = document.getElementById("nombre").value;
console.log(nombre);


class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio
    }
}

const listaProductos = [
    {id:1 ,nombre: "televisor", categoria: "electro", precio: 2300, imagen: './imagenes/imagen1.jpg'},
    {id:2, nombre: "ventilador", categoria: "electro", precio: 1700},
    {id:3, nombre: "computadora", categoria: "electro", precio: 5000},
    {id:4, nombre: "estufa", categoria: "electro", precio: 1500},

];

const guardarProducto = () => {
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let precio = parseFloat(document.getElementById("precio").value);

    let nuevoProd = new Producto(nombre, categoria, precio);
    listaProductos.push(nuevoProd);
}

listaProductos.forEach(producto => {
    let contenedorProd = document.createElement("div");
    contenedorProd.className = 'producto';
    contenedorProd.innerHTML = `
                    <h3 id='${producto.id}'>${producto.nombre}</h3>
                    <p>${producto.categoria}</p>
                    <p>$${producto.precio}</p>
                    <img src="${producto.imagen}" />
                    `;
    document.querySelector("#productos").append(contenedorProd);
})
