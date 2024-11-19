/**
 *  Crear una función takeWhile que acepte un array y un callback y que:
    • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    • devuelva un array con los elementos hasta el primer callback que devolvió false
    • (Inverso del dropWhile)
 */

const _ = require('lodash');

function libros(array, callback) {
   // Muestra los libros hasta que uno no cumpla la condición
   // En este caso va a mostrar "Matar a un ruiseñor" y "Matar a un león"
   const nuevoarray = _.takeWhile(array, callback);
    console.log('Libros seleccionados:', nuevoarray);  // Muestra los libros seleccionados
    return nuevoarray;
}

function callback(libro) {
    return libro.charAt(0).toUpperCase() === 'M';  // Permite mayusculas y minusculas
}

const array = [
  "Matar a un ruiseñor", 
  "Matar a un león", 
  "1984", 
  "Los miserables", 
  "Memorias de una geisha", 
  "El amor en los tiempos del cólera"
];

libros(array, callback);
