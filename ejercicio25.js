/**
 * Usar un proxy para la validación de los valores de propiedades:
 * Cuando declaremos que el atributo es numérico solo permitimos que ingresen números.
 * Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen letras.
 * Cuando declaremos que el atributo es un email, solo permitimos que ingresen correos.
 * Cuándo declaremos que el atributo es de tipo date, solo permitimos que ingresen fechas.
 * Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como al final de estos y se debe mostrar el error personalizada por consola.
 */

const persona = {
    nombre: "Juan",
    edad: 20,
    email: "juan_dfranco@sena.edu.co",
    date: "2021-10-22",
};

const manejador = {
    get(objetivo, propiedad) {
        console.log(`Obteniendo la propiedad: ${propiedad}`);
        return objetivo[propiedad];
    },
    set(objetivo, propiedad, valor) {
        // se verifica la existencia de la propiedad
        let propiedadValida = false;
        for (let key in objetivo) {
            if (key === propiedad) {
                propiedadValida = true;
                break;
            }
        }
        if (!propiedadValida) {
            console.error(`La propiedad ${propiedad} no existe.`);
            return false;
        }

        // Se eliminan los espacios al inicio y final
        if (typeof valor === "string") {
            while (valor[0] === " ") {
                valor = valor.slice(1);
            }
            while (valor[valor.length - 1] === " ") {
                valor = valor.slice(0, -1);
            }
        }

        if (propiedad === "nombre" && !/^[a-zA-Z\s]+$/.test(valor)) {
            console.error("El nombre solo puede contener letras y espacios.");
            return false;
        }

        if (propiedad === "edad" && !/^\d+$/.test(valor)) {
            console.error("La edad debe ser un número entero.");
            return false;
        }

        if (propiedad === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
            console.error("Debe proporcionar un correo electrónico válido.");
            return false;
        }

        if (propiedad === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
            console.error("Debe proporcionar una fecha válida: yyyy-mm-dd.");
            return false;
        }

        objetivo[propiedad] = valor;
        return true;
    },
};

const proxy = new Proxy(persona, manejador);

// Pruebas
try {
    proxy.nombre = " Juan David Franco Meza ";
    proxy.edad = 25;
    proxy.email = "henry_alexander@sena.edu.co";
    proxy.date = "2024-11-19";

    console.log(proxy.nombre);
    console.log(proxy.edad);
    console.log(proxy.email);
    console.log(proxy.date);
    console.log(persona);
} catch (error) {
    console.error(error.message);
}