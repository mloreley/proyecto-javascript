/*let pass = 1234;

let dato = parseInt(prompt("Cual es la contraseña???"));

let intentos = 3;

while((dato != pass) && (intentos > 0)){
    intentos --;

    alert(`Clave equivocada. Te quedan ${intentos} intentos`)

    //alert("Clave equivocada, intente nuevamente");
    dato = parseInt(prompt("Cual es la contraseña???"));
}
*/
/*switch(variable){
    case valor:
        codigo
        break
    default:
        codigo
        break;
}
*/

let animal = prompt("que animal te gusta?");

switch (animal){
    case "gato":
        alert("el gato hace miau");
        break
    case "vaca":
        alert("la vaca hace mu");
        break
    case "perro":
        alert("el perro hace guau");
        break
    default:
        alert("no se como hace ese animal");
        break
}
