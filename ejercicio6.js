// Crear una función SOME que acepte un array y un callback y que:
// Por cada elemento del array ejecute el callback pasándole  dicho elemento como argumento
// Devuelva true si al menos una de las llamadas al callback devolvió true.


let number = [];
let numbersitos;

function esPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true
}

while (true) {
    numbersitos = parseInt(prompt("Debe ingresar números positivos (Si desea terminar oprima 0)"));

    if (numbersitos === 0) {
        break;
    } else if (numbersitos > 0) {
        number.push(numbersitos);
    } else {
        alert("Ingresó un número negativo");
    }
}

console.log("Números ingresados: ", number);

const tienePrimos = number.some(esPrimo);

if (tienePrimos) {
    console.log("Ingresó números primos.");
    const numerosPrimos = number.filter(esPrimo);
    console.log("Números primos: ", numerosPrimos);
} else {
    console.log("No ingresó números primos.");
}