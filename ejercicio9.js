/**
 *  Crear una función dropWhile que acepte un array y un callback y que:
    • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    • devuelva un array con los elementos a partir del primer callback que devolvió false
    • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el 
    callback de true, no los agrega, cuando el callback da false por primera vez agrega
    todos los elementos restantes a partir de dicho elemento inclusive)
 */

const _ = require('lodash');

function libros(array, callback) {
  
  return _.dropWhile(array, callback);
}

// Callback necesaria para la evaluación de los elementos
function callback(palabra) {
  return palabra.charAt(0) === 'r';  // Si la palabra comienza con 'r', se eliminará
}

const array = [
  "1984",
  "rebelion en la granja",
  "cien años de soledad",
  "la llamada de cthulu",
  "la divina comedia",
  "la biblia",
  "el diario de ana frank",
  "el principito",
  "la metamorfosis"
];

console.log(libros(array, callback));
