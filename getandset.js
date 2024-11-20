const persona = {
    nombre: "Juan",
    edad: 20
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

        if (propiedad == "nombre" && !/^[0-9]+$/.test(valor)) {
            throw new Error("Valor debe contener solo letras y espacios.");
        }

        if (propiedad == "edad" && !/^[0-9]+$/.test(valor)) {
            throw new Error("Valor debe contener solo números.");
        }
        objetivo[propiedad] = valor
    }
}

const proxy = new Proxy (persona, manejador);

proxy.nombre = "Juan David Franco Meza";
proxy.edad = 15;

console.log(proxy.nombre);
console.log(persona);