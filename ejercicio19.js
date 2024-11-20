/**
 *  Crea una función asincrónica que realice una llamada a un archivo local en formato json y
 *  luego manipule los datos recibidos para mostrar información específica
 */

async function funcionAsincronica() {
    try {
        const respuesta = await fetch("./data.json");
        const data = await respuesta.json();
        
        // De el objeto biblitoeca se trae "titulo"
        const titulos = data.biblioteca.map(libro => libro.titulo);

        let i = 0;

            // Cada 3 seg muestra un titulo
            const intervalo = setInterval(() => {
             // Muestra el título actual en la consola
            console.log(titulos[i]);
            
            // Ingrementa para mostrar el siguiente titulo

            i++;

            // Detener el intervalo si llega al último título
            if (i === titulos.length) {
                clearInterval(intervalo);
            }
        }, 3000);
    } catch (error) {
        console.error("Error al leer el archivo.", error);
    }
}

funcionAsincronica();