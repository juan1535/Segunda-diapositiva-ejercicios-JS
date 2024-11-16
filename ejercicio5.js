/**
 * Crear una función every que acepte un array y un callback y que:
 * 
 * por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
 * 
 * devuelva true si todas las llamadas al callback devolvoieron true.
 */

function every(array, callback) { // Se crea una función con dos parametros
    for (let i = 0; i < array.length; i++) {    // Se crea un ciclo for que recorre cada posición del array 
        if (!callback(array[i])) {              // Si es diferente de la comparation retorna en false
            return false;                       // Muestra por pantalla que es false
        }
    }
    return true;            // Si recorre todo el array y el número es menor a 10 retorna en verdadero
}                           // El número de cada posición del array debe de ser menor a 10 para que sea true

function comparation(num) {     // Se crea una función con un parametro que luego se utiliza para comparar que sea menor
    return num < 10;            
}



let numeros = [5, 8, 1];  // array para ejemplo, si se colocan números de dos cifras muestra false

console.log(every(numeros,comparation))