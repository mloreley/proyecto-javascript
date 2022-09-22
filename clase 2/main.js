let texto = "esto es un texto";

let numero = 5;

let booleano = true; //False

let mayorTres = numero > 3; //false

//condicionales
//if
/*let precio = parseFloat(prompt("Cual es el precio"));

if (precio > 100){
    console.log("Que caro!");
} else if(precio == 30){
    console.log("Que bueno, justo lo que tengo en el bolsillo");
} else {
    console.log("Lo llevo");
}*/
/*
preguntar al usuario su edad

si tiene entre 0 y 17 el dato de salida es "eres un ninio"
si tiene entre 18 y 40 - "sos un joven"
y si tiene mas de 40 - "trajiste tu baston?"

*/
let edad = parseInt(prompt("Que edad tenes?"));
// no funciona asi, hay que poner con los &&

if ((edad > 0) && (edad <= 17)){
    console.log("eres un ninio");
} else if((edad >= 18) && (edad < 40)){
    console.log("Sos joven");
} else if (edad >= 40){
    console.log("Trajiste tu baston?");
}else{
    console.log("ingresaste un dato invalido")
}