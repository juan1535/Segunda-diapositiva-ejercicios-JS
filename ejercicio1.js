// Primera solución


// Se inicia declarando una funcion donde se van a realizar todas las operaciones, esta función recibe dos paramentros.

// function imprimirNumeros(desde, hasta) {

// Hacemos una condición para verificar si es mayor desde que la variable inicial

//     if (desde < hasta) {

// Si se cumple se resetea
        
//         let interval = setInterval(() => {
//             if (desde === hasta) {
//                 clearInterval(interval);


//             } else {
// Sino se cumple la condición se imprime por consola el "desde" con su post incremento
//                 console.log(desde++);
//             }
//         }, 2000) //intervalo de tiempo en mls
//     } else {

// Si la condición inicial no se cumple se imprime por consola un aviso del porque no se ejecueta la función
//         console.log("El valor inicial debe ser menor al final");
//     }
// }


// Creamos dos variables para que el usuario pueda agregar por teclado y sea indefinido

// let a = parseInt(prompt("Ingrese el valor inicial:"));
// let b = parseInt(prompt("Ingrese el valor final:"));

// Se imprime la función y le damos las variables ingresadas por el usuario
// imprimirNumeros(a, b);



// Segunda solución


// Se crea una función con dos parametros
function imprimirNumeros(desde, hasta) {
    

    // se inicializan con un valor los parametros
    desde = 5;
    hasta = 16;


    // Se crea un ciclo for para que se repita la impresión de los números
    for (let i = desde; i <= hasta; i++) {
        setTimeout(() => {
            // Se imprime indefinidamente y incrementa el número
            console.log(i);
            if (i === hasta) {
                // Muestra el mensaje final
                console.log("Finished");
            }
        }, 2000);
    }
}

imprimirNumeros();