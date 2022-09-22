// comentarios de una linea
/*
comentarios en varias lineas
*/

let edad = 25;
let nombre = "Lorena";
let apellido = "Correa";

edad = 26;

//STRING TEMPLATE
let nombreCompleto = `El nombre completo es ${nombre} ${apellido}`;

//PROMPT - siempre devuelve un texto
//prompt("Por favor ingresa tu nombre")
let nombreUsuario = prompt("Por favor ingresa tu nombre");

console.log("mensaje para la consola")

//parseInt(numeros enteros), parseFloat(numeros decimales), Number
//parse 

let numero = parseInt(prompt("dame un numero"));
console.log(numero + 10);
alert(nombreCompleto);