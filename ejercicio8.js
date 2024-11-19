/**  Crear una función findIndex que acepte un array y un callback y que:
    • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    • devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
    • sí ningún callback devuelve true, devuelva undefined
 */


function funcionINDEX(array, callback) {

   array = array.findIndex((manga) =>{ // findIndex se utiliza para recorrer el array, si encuentra la palabra (o lo que busca)
                                       // Devuelve la posición
      return callback(manga);
   });
   console.log(array);
   return array;
}

function encontrar(manga){
   return manga === 'dragon ball' ; // Si findIndex no encuentra coincidencia alguna mostrará: "-1"
};

const array = ["tokyo ghoul", "tokyo revenger", "death parade", "one piece", "dragon ball", "Naruto", "haikyu", "one puch man"];

funcionINDEX(array, encontrar);