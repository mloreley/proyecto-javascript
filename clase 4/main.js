function primo (num){
    if (num > 1){
        let cuenta = 2;
        while (cuenta <= num && num % cuenta != 0){
            cuenta ++;
        }
        if (num % cuenta == 0 && num == cuenta){
            alert(`El numero ${num} es primo`);
        }
        else{
            alert(`El numero ${num} no es primo porque se divide por ${cuenta}`);
        }
    }
    else{
        if (num == 1){
            alert(`El numero ${num} no es primo`);
        }
        else {
        alert (`Valor ingresado ${num} es incorrecto y no puede ser evaluado`)
    }
    }
}
  
function primo2 (num){    
    if ((num == 2 || num == 3 || num == 5 || num == 7)){
        alert(`El numero ${num} es primo`);
        return True;
    }
    if ((num % 2 == 0) || (num % 3 == 0) || (num % 5 == 0) || (num % 7 == 0) || (num == 1) && (num > 0)) {
        alert (`El numero ${num} no es primo`);
    }
    else{
        let cuenta = 2;
        while (cuenta < num && num % cuenta != 0){
            cuenta ++
        }
        if (num > 0){
            alert(`El numero ${num} es primo`);
        }
        else{
            alert (`Valor ingresado ${num} es incorrecto y no puede ser evaluado`)
        }
    }
}

let intentos = 5
while (intentos > 0){
    intentos --;
    let numero = parseInt(prompt("Ingrese un numero para verificar si es primo"));
    primo(numero);
}
