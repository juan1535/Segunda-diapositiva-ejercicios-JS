/**
 * Crear una función filter que acepte un array y un callback y que:
 * 
 * Por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
 * 
 * Si dicho callback devuelve true, pushea el elemento a un nuevo array.
 * 
 * Devuelva el array final con los elementos que pasaron el "filtro".
 */

function filter(array, callback) {  //Se crea una función con dos parametros.
    
    let resultado = [];  // se crea un array vacío.

    for (let i = 0; i < array.length; i++) {  //bucle para recorrer el array, si i < array continúa.
    //  ||
    //  V    se llama la función con el elemento actual, o sea, cada posición del array. El callback aplica.
    //      en este caso la función esPar.
        if (callback(array[i])) {
            // Si la función anterior (if) es true.
            resultado.push(array[i]);   // Pushea al array los elementos que pasaron el filtro (true).
        }
    }
    return resultado; 
}

function esPar( numero ) {  // Se crea una función con un parametro.
    return numero % 2 === 0;    // Retorna una operación como verdadera, si el residuo de 2 es === 0, o sea, que es par.
}

let numeros = [2, 5, 8, 10, 4, 3, 88];  // Variable como ejemplo para usar el filtro.

console.log(filter(numeros,esPar)); // Se llama por consola la función filter y los parametros numeros, que es el 
//  array lleno y la función esPar.