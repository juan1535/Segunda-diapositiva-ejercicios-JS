// Crear una función SOME que acepte un array y un callback y que:
// Por cada elemento del array ejecute el callback pasándole  dicho elemento como argumento
// Devuelva true si al menos una de las llamadas al callback devolvió true.

function some(array, callback) {    // Se crea una función con dos parametros
    for (let i = 0; i < array.length; i++) {    // Un ciclo repetitivo para evaluar cada posición
        if (callback(array[i])) {   // Pasa por cada posición del array y el callback se utiliza para comparar
            return true;    // Si se cumple por lo menos una retorna en true
        }
    }
    return false;       // Sino sale del ciclo y la condición y retorna en false
}                          

function comparation(num) {     // Se crea una función y un parametro que se utilizará para 
                                // una operación logica, al ser menor a 10 devuelve true
    return num < 10;            
}

let numeros = [1, 29, 90, 70];  // Devuelve true porque está el 1 y: 1 < 10

console.log(some(numeros,comparation)); /**
                                            Se llama la función SOME y dos argumentos Some recorre cada elemento
                                            del array y ejecuta comparation.

                                            Revisa cada número y devuelve true si
                                            al menos un número es menor a 10.
 */                                         
