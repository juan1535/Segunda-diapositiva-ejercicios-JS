// La respuesta es: A

let i = 0;

setTimeout(() => alert(i), 100);


// Solo puede ejecutar esta tarea porque está ocupado el bucle
for (let j = 0; j < 100000000; j++) {
    i++;
}