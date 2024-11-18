/**
 * Crear una función every que acepte un array y un callback y que:
 * por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
 * devuelva true si todas las llamadas al callback devolvoieron true.
 */

let numbers = [5, 8, 1];

function comparativo(num) {
    return num <= 10;
}

let resultado = numbers.every(comparativo);

console.log(resultado);