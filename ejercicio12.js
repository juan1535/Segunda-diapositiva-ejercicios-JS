/**
 * La función incorporada setTimeou utiliza callbacks. Crea una alternativa basada en promesas.
 * 
 * La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse después de ms milisegundos
 * para que podamos agregarle. then, así;
 */

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Este fué el intervalo de tiempo que transcurrió: ${ms} (milisegundos)`);
        }, ms);
    });
}

delay(3000).then((message) => {
    console.log(message);
    alert("Se ejecuta luego de 3 seg.")
})