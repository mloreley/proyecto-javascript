function comida1 (total,cantidad,entrada){
    // un algoritmo con un condicional - SENTENCIA SWITCH
    switch(entrada) {
        case "empanadas":
            alert("las empanadas cuestan $85 cada una");
            total = cantidad * 170; // se calculan 2 empanadas por persona
            console.log(`Para ${cantidad} personas son $ ${total} la entrada`);
            break;
        case "pizza":
            alert("la pizza cuesta $400 cada una");
            total = cantidad * 100; //se calculan 2 porciones por persona
            console.log(`Para ${cantidad} personas son $ ${total}`);
            break;
        case "brusquetas":
            alert("las brusquetas cuestan $200 las 3 unidades");
            total = cantidad * 200; //se calculan 3 brusquetas por persona
            console.log(`Para ${cantidad} personas se calculan 3 brusquetas por persona. Son $ ${total}`);
            break;    
        default:
            alert("Ha ingresado una entrada no valida");
            break;
    }
    return total;
}
 
function diversion1 (total,juego){
    // un algoritmo utilizando un ciclo - DO WHILE    
    do {
        console.log(`Selecciono el juego: ${juego}`);
        switch(juego) {
            case "pelotero":
                total = total + 2000;
                console.log(`El pelotero cuesta $2000; su total es de $ ${total}`);            
                break;
            case "metegol":
                total = total + 1500;
                console.log(`El metegol cuesta $1500; su total es de $ ${total}`);
                break;
            case "hamaca":
                total = total + 2500;
                console.log(`Las hamacas cuestan $2500; su total es de $ ${total}`);
                break;
            case "tejo":
                total = total + 2000;
                console.log(`El tejo cuesta $2000; su total es de $ ${total}`);
                break;   
            default:
                alert("Ha ingresado un juego no valida");
                break;
        }
        juego = prompt("Ingrese nuevo juego que desea contratar o ESC para salir");  

    } while ((juego != "ESC") && (juego != "esc"));

    return total;
}

let total = 0;
let cantidad = parseInt(prompt("Ingrese la cantidad de comensales de la fiesta"));
let en = prompt("Ingrese el plato de entrada");

cotizaCom = comida1(total,cantidad,en);

let j = prompt("Ingrese juego que desea contratar");
precio2 = diversion1(cotizaCom,j)

console.log(`El total para su fiesta es de $ ${precio2}`);