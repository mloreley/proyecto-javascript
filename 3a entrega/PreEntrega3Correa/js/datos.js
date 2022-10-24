let arrayFiesta = JSON.parse(localStorage.getItem("fiesta"));

let contenedor = document.getElementById("contenedor");

if (arrayFiesta == null ) {
    contenedor.innerHTML = "No hay datos para presupuestar"
} else {contenedor.innerHTML += `<h1>Cantidad de invitados: ${arrayFiesta[0]}</h2> <br><br>`
        contenedor.innerHTML += `<h1>Costo total de catering: ${arrayFiesta[arrayFiesta.length-1]}</h2> <br><br> <h2> DETALLES DEL CATERING: <h2> <br>`
        arrayFiesta[1].forEach(com => {
            contenedor.innerHTML += `
                <h2>Menu: ${com.plato}</h2>
                <h2>Cantidad de porciones: ${com.porciones}</h2>
                <h2>Costo del menu: $${com.costo}</h2>
                <p>-----------------------------</p>
            `        
        } 
    )
}