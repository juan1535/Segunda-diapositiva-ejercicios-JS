/**
 * ¿Cuál es el resultado del código a continuación?
 */


// Muestra en una alerta: 100000000

let i = 0;
setTimeout(() => alert(i), 100);
for (let j = 0; j < 100000000; j++) {
    i++;
}