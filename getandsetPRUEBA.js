/**
 * Usar un proxy para la validación de los valores de propiedades:
 * 
 * Cuando declaremos que el atributo es numérico solo permitimos que ingresen números.
 * 
 * Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen letras.
 * 
 * Cuando declaremos que el atributo es un email, solo permitimos que ingresen correos.
 * 
 * Cuándo declaremos que el atributo es de tipo date, solo permitimos que ingresen fechas.
 * 
 * Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como al final de estos y se debe mostrar el error personalizada por consola.
 */

const persona = {
    nombre: "Juan",
    edad: 20,
    email: "juan_dfranco@sena.edu.co",
    date: 22/10/2021,
}

const manejador = {
    get (objetivo, propiedad) {
        console.log(`Obteniendo la propiedad: ${propiedad}`);
        return objetivo[propiedad]
    },
    Set (objetivo, propiedad, valor) {

        if (Object.keys(objetivo).indexOf(propiedad) === -1) {
            return console.error(`La propiedad ${propiedad} no existe.`);
        }

        if (propiedad == "nombre" && !/^[a-zA-Z]+$/.test(valor)) {
            throw new Error("Valor debe contener solo letras y espacios.");
        }

        if (propiedad == "edad" && !/^[0-9]+$/.test(valor)) {
            throw new Error("Valor debe contener solo números.");
        }

        if (propiedad == "email" && /^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(valor)) {
            if ((campo.match(RegExPattern)) && (campo!='')) {
                return true;
          } else {
                throw new Error("Debe proporcionar un correo electronico válido.");
          }
        }

        if (propiedad == "date" && /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/.test(valor)) {
            throw new Error("Debe proporcionar un correo electronico válido.");
        }

        objetivo[propiedad] = valor
    }
}

const proxy = new Proxy (persona, manejador);

proxy.nombre = "Juan David Franco Meza";
proxy.edad = 20;
proxy.email = "henry_alexander@sena.edu.co"
proxy.date = 19-11-2024

console.log(proxy.nombre);
console.log(proxy.edad);
console.log(proxy.email);
console.log(proxy.date);
console.log(persona); 