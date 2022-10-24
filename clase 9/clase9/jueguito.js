const estadoJugador = {
    velocidad: 100,
    mostrar: true,
    top:0,
    left:0,
}
const codigos = {
    izquierda: 37,
    arriba: 38,
    derecha: 39,
    abajo: 40
}

const boton = document.getElementById("desaparecer");
const jugador = document.getElementById("jugador");

boton.onclick = ()=> {
    if (estadoJugador.mostrar) { //lo vamos a ocultar
        jugador.style.opacity = 0;
        estadoJugador.mostrar = false;
        boton.innerText = 'Mostrar'
    } else {
        jugador.style.opacity = 1;
        estadoJugador.mostrar = true;
        boton.innerText = 'Esconder'
    }
}


const mover = (e)=> {
    switch(e.keyCode) {
        case codigos.arriba:
            estadoJugador.top -= estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px";
            break;
        case codigos.abajo:
            estadoJugador.top += estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px";
            break;
        case codigos.izquierda:
            estadoJugador.left -= estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px";
            break;
        case codigos.derecha:
            estadoJugador.left += estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px";
            break;
        default:
            alert("solo podes usar las flechas")
            break;
    }
}

window.addEventListener("keydown", mover);