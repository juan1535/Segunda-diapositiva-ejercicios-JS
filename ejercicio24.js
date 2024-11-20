/**
 * 24. Crear un objeto proxy usando la clase Proxy.
 */

const persona = {
    nombre: "Juan",
    edad: 20
};

const manejador = {
    get(objetivo, propiedad) {
        console.log(`Obteniendo la propiedad: ${propiedad}`);
        return objetivo[propiedad];
    },
    set(objetivo, propiedad, valor) {
        console.log(`Modificando la propiedad: ${propiedad} con el valor: ${valor}`);
        objetivo[propiedad] = valor;
        return true;
    }
};

const proxy = new Proxy(persona, manejador);

proxy.nombre = "Juan David"; 
proxy.edad = 25;            

console.log(proxy.nombre); 
console.log(proxy.edad);   
