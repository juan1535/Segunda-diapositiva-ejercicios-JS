/**
 * Crear una función every que acepte un array y un callback y que:
 * 
 * por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
 * 
 * devuelva true si todas las llamadas al callback devolvoieron true.
 */

// let numeros = [5, 8, 1];

// let mayores10 = numeros.every(num => num > 10);

// if (mayores10) {
//     console.log("Todos los números son mayoyes que 10.");
// } else {
//     console.log("No todos los números son mayoyes que 10.");
// }

let numeros = [10,2,30,40,50];

let mayores10 = numeros.every(num => num >= 10);

if (mayores10) {
    console.log("Todos los números son mayores");
} else {
    console.log("No todos los números son mayores");
}