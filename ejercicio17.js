/**
 * Realiza una llamada a un archivo local en formato JSON, luego muestre los datos obtenidos en la consola.
 */

function leer() {
    return fetch("data.json")
}

leer().then((respuesta) => {
    respuesta.json().then((data) => {
        console.log(data.biblioteca);
    }) 
});

